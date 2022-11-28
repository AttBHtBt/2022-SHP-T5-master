import requests
import time
from bs4 import BeautifulSoup
import csv

news_categories = {
    "사회": "society",
    "정치": "politics",
    "경제": "economic",
    "스포츠": "sports",
}


def get_news_by_category(category, category_url):
    filename = 'article_crawling_with_company_name_and_thumbnails.csv'
    f = open(filename, 'a', encoding='utf-8-sig', newline='')
    writer = csv.writer(f)

    article_list = []  # 기사가 담길 리스트 선언
    index = 1  # page 이동을 위한 index 설정

    while True:
        # page 를 변경하며 한페이지의 전체기사 목록을 가져오기
        url = ("https://news.daum.net/breakingnews/" + category_url + "/?page={}").format(index)
        index += 1
        html = requests.get(url)
        soup = BeautifulSoup(html.content, "html.parser")
        news_section = soup.find('ul', {'class': 'list_news2 list_allnews'})
        news_list = news_section.find_all('a', {'class': 'link_txt'})
        news_company_list = []
        for text_tag in news_section.find_all('span', {'class': 'info_news'}):
            news_company_list.append(text_tag.text.split("·")[0].removesuffix(" "))
        print(news_company_list)
        if len(news_list) < 15:  # page내 기사가 15개 미만이라면 마지막 page로 간주, 반복문 탈출!
            break

        for i,news in enumerate(news_list):
            article_title = news.text
            article_url = news.get('href')
            print(article_title)
            print(article_url)
            try:
                article_html = requests.get(article_url)
                soup = BeautifulSoup(article_html.content, "html.parser")
                text_list = [text_tag.text for text_tag in soup.find_all('div', {'dmcf-ptype': "general"})]
                text_list += [text_tag.text for text_tag in soup.find_all('p', {'dmcf-ptype': "general"})]  # 기사 본문
                thumbnail_url = soup.find("img","thumb_g_article").get("data-org-src")  # 썸네일

                if len(text_list) == 0:
                    continue
                article_content = " ".join(text_list)
                article_content = article_content.replace("\n", " ")
                article_content = article_content.replace("\t", " ")
                # 기사 정보를 제목과 본문으로 저장하기 위한 dictionary 형태로 변환
                writer.writerow([category, article_title, article_content, news_company_list[i],thumbnail_url, article_url])
            except Exception as e:
                print(e)
                continue
        # 예시로 2페이지만 크롤링
        if index > 2:
            f.close()
            return
        # 중간중간 잘 진행되는지 여부 확인을 위해 페이지가 5배수 일때마다 표시하기
        if index % 5 == 0:
            print(index)
            time.sleep(0.5)  # 가져오는 작업이 서버의 부담을 줄수있기에 잠깐씩 쉬어준다.
    f.close()


for key, value in news_categories.items():
    get_news_by_category(key, value)
