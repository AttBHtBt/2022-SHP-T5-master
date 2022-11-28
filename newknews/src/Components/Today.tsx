import styled from "styled-components";
import Clustering from "../Slider/Clustering";

const Wrapper = styled.div`
  height: 470px;
  width: 1000px;
  margin: 0px auto;
  min-width: 800px;
  margin-top: 30px;
  margin-bottom: 30px;
  //background-color: #89b2e9;
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

function Today() {
  return (
    <>
      <Wrapper>
        <Title>이슈 클러스터링</Title>
        <NumNews>
          분석뉴스 <Num>1680</Num>
          <p>건</p>
          의견분류 <Num>18</Num>
          <p>건</p>
        </NumNews>
        <Nownews>
          <p>분석기준 </p>2022.11.14(월) 08:00 ~ 17:00
        </Nownews>
        <Clustering />
      </Wrapper>
    </>
  );
}

export default Today;
