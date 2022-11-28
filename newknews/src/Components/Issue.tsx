import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
  height: 450px;
  width: 1000px;
  margin: 0px auto;
  min-width: 800px;
  //background-color: #89b2e9;
`;

const Title = styled.h1`
  font-size: 22px;
  font-weight: 600;
  //background-color: #6182dc;
`;

//기사 개수, 동적으로 받아올 것
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
  display: inline-block;
  margin-bottom: 25px;
  p {
    font-size: 11px;
    font-weight: 400;
    display: inline-block;
    margin-right: 20px;
  }
`;

const Nownews = styled.div`
  display: inline;
  //background-color: #c9eec5;
  color: #aeaeae;
  font-size: 12px;
  float: right;
  padding-top: 20px;
  p {
    font-weight: 500;
    display: inline;
  }
`;

const BoxWrapper = styled.div`
  //background-color: #b19fc1;
  height: 250px;
  width: 1000px;
  float: left;
`;

const MiniHeader = styled.div<{ bgcolor: string }>`
  width: 325px;
  height: 30px;
  background-color: ${(props) => props.bgcolor};
  text-align: center;
  color: whitesmoke;
  line-height: 30px;
  font-weight: 400;
`;

const BoxVariant = {
  hover: {
    scale: 1.1,
  },
};

const Box = styled.div`
  // background-color: #9898cb;
  height: 280px;
  width: 350px;
  float: left;
  text-align: center;
`;

const Bar = styled.div`
  //background-color: #d5f1a4;
  height: 70px;
  width: 700px;
  float: left;
  text-align: center;
  margin-top: 30px;
  padding-top: 0px;
  padding-right: 25px;
  position: relative;
  span {
    position: absolute;
    left: 0px;
    bottom: 0px;
    font-size: 15px;
    font-weight: 300;
  }
`;

const Side = styled.div`
  //background-color: #3377ba;
  height: 350px;
  width: 279px;
  float: right;
  border: 1px solid #bfdefc;
  img {
    height: 100%;
    width: 100%;
    background-size: cover;
    background-position: center center;
  }
`;

const Img = styled.div<{ bgphoto: string }>`
  height: 220px;
  width: 325px;
  background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.7)),
    url(${(props) => props.bgphoto});
  background-size: cover;
  background-position: center center;
  border: 0px;
  position: relative;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  h1 {
    color: whitesmoke;
    font-size: 18px;
    text-align: left;
    padding-left: 5px;
    font-weight: 400;
    position: absolute;
    bottom: 40px;
  }
  p {
    color: #d1cdcd;
    font-size: 14px;
    text-align: left;
    padding-left: 5px;
    position: absolute;
    bottom: 20px;
  }
`;

const Circle = styled.div`
  height: 9px;
  width: 9px;
  border-radius: 4.5px;
  background-color: #aeaeae;
  display: inline-block;
  margin: 0px 2px;
`;

function Issue() {
  const issue = [1, 2, 3, 4, 5, 6, 7, 8]; //test

  return (
    <>
      <Wrapper>
        <Title>오늘의 이슈</Title>
        <NumNews>
          분석뉴스 <Num>1200</Num>
          <p>건</p>
          의견분류 <Num>8</Num>
          <p>건</p>
        </NumNews>
        <Nownews>
          <p>분석기준 </p>2022.11.09(수) 08:00 ~ 17:00
        </Nownews>
        <BoxWrapper>
          <Box>
            <Img bgphoto="https://img2.daumcdn.net/thumb/R658x0.q70/?fname=https://t1.daumcdn.net/news/202211/08/moneytoday/20221108144626291fpmm.jpg">
              <h1>
                대통령경호처, 용산 이전으로 기동대 추가? "집회 대비한 배치"
              </h1>
              <p>머니투데이</p>
            </Img>
            <MiniHeader bgcolor="#0475E6">이 슈</MiniHeader>
          </Box>
          <Box >
            <Img bgphoto="https://img2.daumcdn.net/thumb/R658x0.q70/?fname=https://t1.daumcdn.net/news/202211/08/chosunbiz/20221108143726898vrrk.jpg">
              <h1>
                이태원 ‘사고’냐 ‘참사’냐… 與野, 대통령실 국정감사서 불붙은 용어
                논쟁
              </h1>
              <p>조선비즈</p>
            </Img>
            <MiniHeader bgcolor="#E67404">다른 의견</MiniHeader>
          </Box>
          <Side>
            <img src="img/preview.png" />
          </Side>
        </BoxWrapper>
        <Bar>
          <Link to="/Detail">
            <span>전체 기사 보기 〉</span>
          </Link>
          {issue.map((i) => (
            <Circle></Circle>
          ))}
        </Bar>
      </Wrapper>
    </>

  );
}
export default Issue;
