import csv
import pandas as pd
from konlpy.tag import Okt
from tqdm import tqdm
from collections import Counter

all_keywords = []

for x in range(11):  # 클러스터 개수만큼 반복 (수정예정)
    df = pd.read_csv('clustered_article_for_keyword_count.csv', header=None, nrows=500,
                     names=['cluster_num', 'title', 'content', 'url'])  # csv 읽음
    df.drop_duplicates(['title'], ignore_index=True, inplace=True)
    df.drop_duplicates(['content'], ignore_index=True, inplace=True)
    df = df[df['cluster_num'] == x]
    okt = Okt()
    drop_index_list = []

    for i, row in df.iterrows():
        try:
            if len(row['content']) < 350:
                drop_index_list.append(i)
        except:
            drop_index_list.append(i)

    df.drop(drop_index_list, inplace=True)  # 해당 index를 지우기
    df.index = range(len(df))

    # 명사 추출
    noun_list = []
    for content in tqdm(df['content']):
        try:
            nouns = okt.nouns(content)
            noun_list.append(nouns)
        except Exception as e:
            print(e)
            print(content)
            noun_list.append([])
            continue

    noun_list = sum(noun_list, [])  # 하나의 배열로 합침
    for i, v in enumerate(noun_list):
        if len(v) <= 1:  # 한 글자 이하 키워드 삭제
            noun_list.pop(i)

    count = Counter(noun_list)  # 나온 횟수 세기
    most_common_words = count.most_common(3)  # 많이 나온 순으로 100개 저장
    for v in most_common_words:
        # all_keywords.append((x, v[0], v[1], round(v[1] / len(df), 2))) # 기사당 키워드 수
        all_keywords.append((x, v[0], v[1]))
        print(v)

all_keywords.sort(key=lambda x: x[2], reverse=True)
print(all_keywords)

filename = 'todays_keyword_by_cluster_num.csv'
f = open(filename, 'a', encoding='utf-8-sig', newline='')
for element in all_keywords:
    writer = csv.writer(f)
    writer.writerow([element[1], element[2], element[0]])
f.close()
