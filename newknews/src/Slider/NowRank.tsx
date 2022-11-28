import React, { Component } from "react";
import Slider from "react-slick";
import styled from "styled-components";

const Item = styled.div`
  //background-color: #634e95;
  height: 42px;
  line-height: 42px;
  text-align: center;
  span {
    font-size: 11px;
    font-weight: 500;
    color: #818181;
  }
`;

const Index = styled.p`
  display: inline;
  color: #e67404;
  font-size: 11px;
  font-weight: 500;
`;

const Title = styled.p`
  width: 180px;
  //background-color: #a7c7e3;
  display: inline-block;
  max-width: 180px;
  color: black;
  vertical-align: middle;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  font-size: 13px;
`;

const testitem = [
  { index: "1", name: "대통령 전용기에 MBC 탑승 불허 논란", count: 102 },
  { index: "2", name: "정부, '서울·경기 4곳' 빼고 규제 지역 해제", count: 88 },
  { index: "3", name: "검찰, 정진상·대장동 유착관계 수사 속도", count: 86 },
  {
    index: "4",
    name: "野 3당, '이태원 국정조사' 요구서 본회의 보고",
    count: 76,
  },
  { index: "5", name: "美 중간선거 개표, 상원서 접전", count: 56 },
  {
    index: "6",
    name: "뉴욕 증시, 예상보다 낮은 물가상승률에 일제히 상승 마감",
    count: 52,
  },
  {
    index: "7",
    name: "특수본, 용산서 정보관·구청 직원등 소환 조사",
    count: 34,
  },
  { index: "8", name: `수능 D-7, "수험생 방역수칙 준수해야"`, count: 21 },
  { index: "9", name: "'풍산개 파양논란' 文 직접 해명", count: 19 },
  { index: "10", name: "푸르밀, 사업종료 계획 전격 철수", count: 8 },
];

const NowRank = () => {
  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 3000,
    vertical: true,
    arrows: false, //Previous 버튼 제거
  };

  return (
    <Slider {...settings}>
      {testitem.map((item) => (
        <Item>
          <Index>{item.index + ". "}</Index>
          <Title>{item.name}</Title>
          <span>{item.count}건</span>
        </Item>
      ))}
    </Slider>
  );
};

export default NowRank;
