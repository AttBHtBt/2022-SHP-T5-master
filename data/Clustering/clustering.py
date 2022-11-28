import pandas as pd
from konlpy.tag import Okt
from tqdm import tqdm
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.cluster import DBSCAN,KMeans
import numpy as np
import csv

df = pd.read_csv('article_daum_221105.csv',names=['category','title','content','url'])
#중복 제거
df.drop_duplicates(['title'], ignore_index=True, inplace=True)
df.drop_duplicates(['content'], ignore_index=True, inplace=True)

categories = ['사회','정치','경제','스포츠']
start = 1

filename = 'clustered_article_sample.csv'
f = open(filename,'w',encoding='utf-8-sig', newline='')
writer = csv.writer(f)


for category in categories:

    tmp_df = df[df['category']==category]
    okt = Okt()


    drop_index_list = [] # 지워버릴 index를 담는 리스트
    for i, row in tmp_df.iterrows():
        try:
            if len(row['content']) < 350: # 만약 350자 이하면 제거
                drop_index_list.append(i) # 지울 index 추가
        except:
            drop_index_list.append(i)

    tmp_df.drop(drop_index_list, inplace=True) # 해당 index를 지우기

    # index를 지우면 순회시 index 값이 중간중간 비기 때문에 index를 다시 지정
    tmp_df.index = range(len(tmp_df))

    #명사 추출
    noun_list = []
    for content in tqdm(tmp_df['content']):
        try:
            nouns = okt.nouns(content)
            noun_list.append(nouns)
        except Exception as e:
            print(e)
            print(content)
            noun_list.append([])
            continue

    tmp_df['nouns'] = noun_list

    drop_index_list = [] # 지워버릴 index를 담는 리스트
    for i, row in tmp_df.iterrows():
        temp_nouns = row['nouns']
        if len(temp_nouns) == 0: # 만약 명사리스트가 비어 있다면
            drop_index_list.append(i) # 지울 index 추가

    tmp_df.drop(drop_index_list, inplace=True) # 해당 index를 지우기

    # index를 지우면 순회시 index 값이 중간중간 비기 때문에 index를 다시 지정
    tmp_df.index = range(len(tmp_df))

    # 문서를 명사 집합으로 보고 문서 리스트로 치환 (tfidfVectorizer 인풋 형태를 맞추기 위해)
    text = [" ".join(noun) for noun in tmp_df['nouns']]

    tfidf_vectorizer = TfidfVectorizer(ngram_range=(1,4))
    tfidf_vectorizer.fit(text)
    vector = tfidf_vectorizer.transform(text).toarray()

    vector = np.array(vector) # Normalizer를 이용해 변환된 벡터
    model = DBSCAN(eps=0.625,min_samples=10, metric = "cosine")

    result = model.fit_predict(vector)
    tmp_df['result'] = result

    tmp_df.drop(index=tmp_df[tmp_df['result']==-1].index, inplace=True)
    tmp_df.index = range(len(tmp_df))
    result = set(result)
    result.remove(-1)


    #결과 확인 용
    for cluster_num in set(result):
        print("cluster num : {}".format(cluster_num))
        temp_df = tmp_df[tmp_df['result'] == cluster_num] # cluster num 별로 조회
        for i,row in temp_df.iterrows():
            print(row[1])
            writer.writerow([start,row['category'],row['title'],row['content'],row['url']])
        print()
        start += 1
f.close()