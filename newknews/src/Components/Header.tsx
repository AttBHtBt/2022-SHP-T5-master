import styled from "styled-components";
import NowRank from "../Slider/NowRank";
import { Link, useNavigate } from "react-router-dom";
import { useRef, useState } from "react";

const Wrapper = styled.div`
  margin: 0px auto;
  width: 1000px;
  min-width: 800px;
`;

const HdTop = styled.div`
  //background-color: #70b4b0;
  height: 120px;
  width: 1000px;
  display: table-cell;
  vertical-align: middle;
`;

const Logo = styled.div`
  //background-color: #b48f8f;
  height: 38px;
  float: left;
  img {
    height: 100%;
  }
`;

const SearchBox = styled.form`
  width: 370px;
  height: 42px;
  //background-color: #efeeff;
  float: right;
`;

const Bar = styled.input`
  width: 250px;
  height: 42px;
  padding-left: 20px;
  border: 1px solid #0475e6;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  float: left;
  &:focus {
    outline: none;
    border: 2px solid #0475e6;
  }
`;

const SearchBtn = styled.div`
  width: 50px;
  height: 42px;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  background-color: #0475e6;
  float: left;
  align-items: center;
  text-align: center;
  display: flex;
  justify-content: center;
  svg {
    //background-color: #785151;
    fill: #e0e0e0;
    height: 50%;
    width: 50%;
  }
`;

const SearchHp = styled.div`
  width: 60px;
  height: 42px;
  border: 1px solid #0475e6;
  border-radius: 5px;
  background-color: #f7faff;
  float: right;
  text-align: center;
  p {
    color: #0475e6;
    font-size: 11px;
    font-weight: 500;
  }
`;

const Icon = styled.svg`
  margin-top: 3px;
  fill: #0475e6;
  height: 15px;
  width: 15px;
`;

const NewList = styled.div`
  width: 250px;
  height: 42px;
  background-color: #e1dfdf;
  float: right;
  border-radius: 5px;
  margin-right: 10px;
  overflow: hidden;
`;

interface IForm {
  state: string;
}

function Header() {
  const [state, setState] = useState("default");
  const ref = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  return (
    <Wrapper>
      <HdTop>
        <Logo>
          <Link to="/">
            <img src="img/logo_blue.png" />
          </Link>
        </Logo>

        <SearchBox>
          <Bar
            placeholder="기본 검색어를 입력해주세요"
            ref={ref}
            onChange={() => {
              setState(ref.current?.value + "");
            }}
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                //e.preventDefault(); //페이지 갱신 안되도록
                setState(ref.current?.value + "");
                navigate("/Search", { state: state });
              }
            }}
          />
          <SearchBtn>
            <Link to="/Search" state={state}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352c79.5 0 144-64.5 144-144s-64.5-144-144-144S64 128.5 64 208s64.5 144 144 144z" />
              </svg>
            </Link>
          </SearchBtn>

          <SearchHp>
            <Icon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path d="M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z" />
            </Icon>
            <p>검색도움말</p>
          </SearchHp>
        </SearchBox>

        <NewList>
          <NowRank />
        </NewList>
      </HdTop>
    </Wrapper>
  );
}
export default Header;
