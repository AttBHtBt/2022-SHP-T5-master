import styled from "styled-components";
import { useEffect, useState } from "react";
import SimpleKeyword from "./SimpleKeyword";
import ApexCharts from "react-apexcharts";
import { motion } from "framer-motion";

const Wrapper = styled.div`
  //background-color: #f5f5cb;
  height: 320px;
  width: 1000px;
  margin: 0px auto;
  min-width: 800px;
  margin-bottom: 300px;
  position: relative;
`;

const TopLeftBox = styled.div`
  //background-color: #ef9e9e;
  height: 30%;
  width: 35%;
`;

const BottomLeftBox = styled.div`
  //background-color: aliceblue;
  //border: 1px solid #c4c4c4;
  //background-color: #aed8fd;
  height: 70%;
  width: 50%;
  bottom: 0;
`;

const Side = styled.div`
  //background-color: yellow;
  height: 100%;
  float: left;
  width: 20%;
`;

const Help = styled.div`
  //background-color: #e9d5d5;
  margin-right: 5px;

  p {
    display: inline-block;
    //background-color: orange;
    padding-left: 2px;
    color: #0253a4;
    font-size: 13px;
    line-height: 20px;
    font-weight: 600;
  }
`;

const Icon = styled.svg`
  margin-top: 3px;
  fill: #0253a4;
  height: 15px;
  width: 15px;
  float: left;
`;

const Tri = styled.div`
  width: 0px;
  height: 0px;
  border-bottom: 10px solid rgba(0, 0, 0, 0.4);
  margin-left: 10px;
  border-left: 9px solid transparent;
  border-right: 9px solid transparent;
`;

const Exp = styled.div`
  width: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  padding: 3px;
  color: white;
  font-size: 12px;
  border-radius: 3px;
`;

const Switch = styled.div`
  height: 30%;
  //background-color: #eeb7b7;
  margin-top: 10px;
  margin-right: 5px;
`;

const Circle = styled(motion.div)`
  background-color: #eea257;
  border-radius: 4.5px;
  height: 9px;
  width: 9px;
  margin-top: 3px;
  margin-left: 3px;
  float: left;
`;

const Item = styled.div<{ active: boolean }>`
  height: 33.3%;
  //background-color: yellowgreen;
  font-size: 12px;
  font-weight: 400;
  color: ${(props) => (props.active ? "#E7801A" : "black")};
  p {
    float: left;
    &:hover {
      background-color: #e2e8f3;
    }
  }
  span {
    font-size: 13px;
    font-weight: 500;
  }
`;

const Graph = styled.div`
  background-color: aliceblue;
  height: 100%;
  width: 80%;
  float: right;
  border: 1px solid #d0d0d0;
`;

const Title = styled.h1`
  font-size: 22px;
  font-weight: 600;
  //background-color: #6182dc;
`;

const Num = styled.span`
  font-size: 13px;
  font-weight: 500;
  color: #0475e6;
`;

const NumNews = styled.div`
  font-size: 13px;
  font-weight: 500;
  //background-color: #b2f2d7;
  padding-top: 10px;
  p {
    font-size: 11px;
    font-weight: 400;
    display: inline-block;
    margin-right: 20px;
  }
`;

const Nownews = styled.div`
  color: #aeaeae;
  font-size: 12px;
  margin-top: 5px;
  p {
    font-weight: 500;
    display: inline;
  }
`;

const KeywordBox = styled.div`
  //background-color: #dbebfb;
  height: 100%;
  width: 100%;
`;

const RightBox = styled.div`
  background-color: #527c9f;
  //border: 1px solid #e5e5e5;
  float: right;
  height: 100%;
  width: 48%;
`;

//실제 구현에서 내림차순 정렬되어있음
const testkeyword = [
  { index: 1, keyword: "폴란드", count: 1380 },
  { index: 1, keyword: "우크라", count: 893 },
  { index: 1, keyword: "나토", count: 563 },

  { index: 2, keyword: "수능", count: 421 },
  { index: 2, keyword: "코로나", count: 396 },
  { index: 2, keyword: "2023", count: 280 },

  { index: 3, keyword: "명단", count: 163 },
  { index: 3, keyword: "이태원", count: 148 },
  { index: 3, keyword: "민주당", count: 130 },

  { index: 4, keyword: "이준석", count: 104 },
  { index: 4, keyword: "팔짱", count: 101 },
  { index: 4, keyword: "장경태", count: 99 },

  { index: 5, keyword: "정진상", count: 92 },
  { index: 5, keyword: "민주", count: 89 },
  { index: 5, keyword: "구속영상", count: 86 },

  { index: 6, keyword: "백신", count: 81 },
  { index: 6, keyword: "고궁", count: 80 },
  { index: 6, keyword: "확진", count: 74 },
  { index: 7, keyword: "노웅래", count: 70 },
  { index: 7, keyword: "압수수색", count: 69 },
  { index: 7, keyword: "검찰", count: 63 },
  { index: 8, keyword: "트럼프", count: 58 },
  { index: 8, keyword: "은퇴자", count: 49 },
  { index: 8, keyword: "국민의힘", count: 44 },
  { index: 9, keyword: "이상민", count: 41 },
  { index: 9, keyword: "경찰", count: 39 },
  { index: 9, keyword: "특수본", count: 30 },
  { index: 10, keyword: "국회", count: 29 },
  { index: 10, keyword: "행안위", count: 21 },
  { index: 10, keyword: "전액삭감", count: 18 },
];

const sortFun = (num: number) => {
  let keyword = [""];
  let count = [0];
  testkeyword.map((item, index) => {
    keyword = [...keyword, item.keyword];
    count = [...count, item.count];
  });
  //console.log(keyword, count);
  return { keyword: keyword.slice(1, num), count: count.slice(1, num) };
};

function Keyword() {
  const [state, setState] = useState(testkeyword);
  const [arr, setArr] = useState(sortFun(8));
  const [check, setCheck] = useState([false, true, false]);

  const num = [3, 7, 15];
  //console.log(state);
  //console.log(arr);

  const Chart = () => (
    <ApexCharts
      type="bar"
      height="224px"
      options={{
        dataLabels: {
          enabled: true,
          textAnchor: "middle",
          distributed: false,
          style: {
            fontSize: "12px",
            fontWeight: 400,
            colors: undefined,
          },
          background: {
            enabled: true,
            foreColor: "#fff",
            padding: 0,
            borderRadius: 2,
            borderWidth: 0,
            borderColor: "#b7fdff",
            opacity: 0.1,
          },
        },
        xaxis: {
          categories: arr.keyword,
          labels: {
            show: true,
            style: {
              colors: "#3563B1",
              fontWeight: 500,
            },
          },
        },
        yaxis: {
          show: true,
          labels: {
            show: true,
            style: {
              colors: ["#7193CD"],
              //fontSize: "12px",
            },
            offsetX: -10,
          },
          axisBorder: {
            show: true,
            color: "#7193CD",
          },
        },
        grid: {
          show: true,
          position: "back",
          yaxis: {
            lines: {
              show: false,
            },
          },
        },
        //colors: Array(10).fill("orange"),
      }}
      series={[
        {
          name: "빈도",
          data: arr.count,
        },
      ]}
    ></ApexCharts>
  );

  return (
    <Wrapper>
      <RightBox>
        <KeywordBox>
          <SimpleKeyword value={state} />
        </KeywordBox>
      </RightBox>
      <TopLeftBox>
        <Title>오늘의 키워드</Title>
        <NumNews>
          전체키워드 <Num>1227</Num>
          <p>개</p>
        </NumNews>
        <Nownews>
          <p>분석기준 </p>2022.11.21(월) 08:00 ~ 17:00
        </Nownews>
      </TopLeftBox>

      <BottomLeftBox>
        <Side>
          <Help>
            <Icon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 464c-114.7 0-208-93.31-208-208S141.3 48 256 48s208 93.31 208 208S370.7 464 256 464zM256 336c-18 0-32 14-32 32s13.1 32 32 32c17.1 0 32-14 32-32S273.1 336 256 336zM289.1 128h-51.1C199 128 168 159 168 198c0 13 11 24 24 24s24-11 24-24C216 186 225.1 176 237.1 176h51.1C301.1 176 312 186 312 198c0 8-4 14.1-11 18.1L244 251C236 256 232 264 232 272V288c0 13 11 24 24 24S280 301 280 288V286l45.1-28c21-13 34-36 34-60C360 159 329 128 289.1 128z" />
            </Icon>
            <p>분류기준</p>
            <Tri></Tri>
            <Exp>
              수집된 기사를 바탕으로 키워드를 추출하여 언급량이 많은 순으로
              보여줍니다.
            </Exp>
          </Help>
          <Switch>
            <Item
              onClick={() => {
                setCheck([true, false, false]);
                setArr(sortFun(num[0] + 1));
              }}
              active={check[0]}
            >
              <p>
                상위 <span>{num[0]}</span>개
              </p>
              {check[0] && <Circle layoutId="circle" />}
            </Item>
            <Item
              onClick={() => {
                setCheck([false, true, false]);
                setArr(sortFun(num[1] + 1));
              }}
              active={check[1]}
            >
              <p>
                상위 <span>{num[1]}</span>개
              </p>
              {check[1] && <Circle layoutId="circle" />}
            </Item>
            <Item
              onClick={() => {
                setCheck([false, false, true]);
                setArr(sortFun(num[2] + 1));
              }}
              active={check[2]}
            >
              <p>
                상위 <span>{num[2]}</span>개
              </p>
              {check[2] && <Circle layoutId="circle" />}
            </Item>
          </Switch>
        </Side>
        <Graph>
          <Chart />
        </Graph>
      </BottomLeftBox>
    </Wrapper>
  );
}

export default Keyword;
