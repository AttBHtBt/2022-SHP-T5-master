import { stat, utimes } from "fs";
import { useEffect, useState } from "react";
import styled from "styled-components";
import Slider from "react-slick";

const Wrapper = styled.div`
  background-color: aliceblue;
  border-radius: 5px;
  margin-left: 8%;
  width: 84%;
  margin-top: 5px;
  overflow: hidden;
`;

const Item = styled.div`
  line-height: 45px;
  height: 45px;
  //background-color: antiquewhite;
`;

const WeatherImg = styled.img`
  height: 100%;
  line-height: 45px;
  float: left;
  //background-color: #3ca3a3;
`;

const Info = styled.div`
  //background-color: #d2b3b3;
  line-height: 45px;
  display: inline-block;
  margin-top: 3px;
  h1 {
    padding-left: 3px;
    line-height: 25px;
    //background-color: orange;
    font-weight: 400;
  }
  p {
    color: #e67404;
    padding-left: 3px;
    line-height: 10px;
    font-size: 12px;
    font-weight: 400;
  }
`;

const Right = styled.div`
  //background-color: #e96464;
  line-height: 45px;
  margin-right: 5px;
  float: right;
  display: inline;
  img {
    width: 15px;
    height: 15px;
    vertical-align: middle;
    padding-bottom: 2px;
    display: inline-block;
    margin-left: 3px;
  }
  h2 {
    //background-color: #91db91;
    display: inline-block;
    font-weight: 500;
  }
`;

const API_KEY = "0314891bb49873a231cd8cc71f1db688";

function Weather() {
  const infomation = [
    {
      name: "서울",
      lat: 37.56667,
      lon: 126.97806,
      weather: "",
      temp: "",
      icon: "",
    },
    {
      name: "부산",
      lat: 35.17944,
      lon: 129.07556,
      weather: "",
      temp: "",
      icon: "",
    },
    {
      name: "인천",
      lat: 37.45639,
      lon: 126.70528,
      weather: "",
      temp: "",
      icon: "",
    },
    {
      name: "대구",
      lat: 35.87222,
      lon: 128.6025,
      weather: "",
      temp: "",
      icon: "",
    },
    {
      name: "대전",
      lat: 36.35111,
      lon: 127.385,
      weather: "",
      temp: "",
      icon: "",
    },
    {
      name: "광주",
      lat: 35.15972,
      lon: 126.85306,
      weather: "",
      temp: "",
      icon: "",
    },
    {
      name: "울산",
      lat: 35.53889,
      lon: 129.31667,
      weather: "",
      temp: "",
      icon: "",
    },
    {
      name: "제주",
      lat: 33.5,
      lon: 126.51667,
      weather: "",
      temp: "",
      icon: "",
    },
  ];
  const [state, setState] = useState(infomation);

  useEffect(() => {
    infomation.map((item, index) => {
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${item.lat}&lon=${item.lon}&appid=${API_KEY}`
      )
        .then((response) => response.json())
        .then((data) => {
          const weather = `${data.weather[0].main}`.toLowerCase();
          const temp = Math.round((data.main.temp - 273.15) * 10) / 10 + "˚C";
          const icon = `img/weather/${data.weather[0].icon}.svg`;
          setState((old) => {
            //console.log(old);
            return [
              ...old.slice(0, index),
              {
                name: item.name,
                lat: item.lat,
                lon: item.lon,
                weather: weather,
                temp: temp,
                icon: icon,
              },
              ...old.slice(index + 1, 9),
            ];
          });
        });
    });
    //console.log(state);
  }, []);

  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 3000,
    vertical: true,
  };

  return (
    <Wrapper>
      <Slider {...settings}>
        {state.map((item) => (
          <Item>
            <WeatherImg src={item.icon} />
            <Info>
              <h1>{item.temp}</h1>
              <p> {item.weather} </p>
            </Info>
            <Right>
              <h2>{item.name}</h2>
              <img src="img/location.svg" />
            </Right>
          </Item>
        ))}
      </Slider>
    </Wrapper>
  );
}
export default Weather;
