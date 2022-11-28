import pandas as pd
from konlpy.tag import Okt
from tqdm import tqdm
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.cluster import DBSCAN, KMeans
import numpy as np
import csv

df = pd.read_csv('article_daum_221105.csv', header=2800, nrows=2000, names=['category', 'title', 'content', 'url'])
df.drop_duplicates(['title'], ignore_index=True, inplace=True)
df.drop_duplicates(['content'], ignore_index=True, inplace=True)
df = df[df['category'] == '정치']
okt = Okt()

drop_index_list = []  # 지워버릴 index를 담는 리스트
for i, row in df.iterrows():
    try:
        if len(row['content']) < 350:  # 만약 명사리스트가 비어 있다면
            drop_index_list.append(i)  # 지울 index 추가
    except:
        drop_index_list.append(i)

df.drop(drop_index_list, inplace=True)  # 해당 index를 지우기

# index를 지우면 순회시 index 값이 중간중간 비기 때문에 index를 다시 지정
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

df['nouns'] = noun_list

drop_index_list = []  # 지워버릴 index를 담는 리스트
for i, row in df.iterrows():
    temp_nouns = row['nouns']
    if len(temp_nouns) == 0:  # 만약 명사리스트가 비어 있다면
        drop_index_list.append(i)  # 지울 index 추가

df.drop(drop_index_list, inplace=True)  # 해당 index를 지우기

# index를 지우면 순회시 index 값이 중간중간 비기 때문에 index를 다시 지정
df.index = range(len(df))

# 문서를 명사 집합으로 보고 문서 리스트로 치환 (tfidfVectorizer 인풋 형태를 맞추기 위해)
text = [" ".join(noun) for noun in df['nouns']]

tfidf_vectorizer = TfidfVectorizer(ngram_range=(1, 4))
tfidf_vectorizer.fit(text)
vector = tfidf_vectorizer.transform(text).toarray()

vector = np.array(vector)  # Normalizer를 이용해 변환된 벡터
model = DBSCAN(eps=1.3, min_samples=6)

result = model.fit_predict(vector)
df['result'] = result

df.drop(index=df[df['result'] == -1].index, inplace=True)
df.index = range(len(df))
result = set(result)
result.remove(-1)

# filename = 'clustered_article_sample_politics.csv'
# f = open(filename,'w',encoding='utf-8-sig', newline='')
# writer = csv.writer(f)

# 결과 확인 용
for cluster_num in set(result):
    print("cluster num : {}".format(cluster_num))
    temp_df = df[df['result'] == cluster_num]  # cluster num 별로 조회
    for i, row in temp_df.iterrows():
        print(row[1])
        # writer.writerow([cluster_num,row['title'],row['content'],row['url']])
    print()
# f.close()










