import { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.65)),
    url("img/keyword.jpg");
  background-size: cover;
  overflow: scroll;
  -ms-overflow-style: none;
  ::-webkit-scrollbar {
    display: none;
  }
  height: 100%;
  width: 100%;
  color: #f3f3f3;
  float: right;
  padding-top: 45px;
`;

const Box = styled.div`
  //background-color: #856b6b;
  text-align: center;
`;

const Content = styled.div<{
  size: string;
  left?: string;
  height?: string;
  vertical?: string;
  bold?: number;
  color?: string;
  right?: string;
}>`
  //background-color: #434141;
  display: inline-block;
  font-size: ${(props) => props.size};
  margin-left: ${(props) => props.left};
  height: ${(props) => props.height};
  vertical-align: ${(props) => props.vertical};
  font-weight: ${(props) => props.bold};
  margin-top: 3px;
  margin-right: ${(props) => props.right};
`;

function SimpleKeyword(props: any) {
  const [state, setState] = useState(props.value);
  //console.log(state);
  return (
    <>
      <Wrapper>
        <Box>
          <Content size="15px" left="3px" vertical="bottom">
            {state[15].keyword}
          </Content>
          <Content size="21px" vertical="bottom" left="10px">
            {state[7].keyword}
          </Content>
        </Box>
        <Box>
          <Content size="22px" vertical="bottom">
            {state[6].keyword}
          </Content>
          <Content
            size="30px"
            bold={500}
            height="38px"
            left="3px"
            vertical="top"
          >
            {state[2].keyword}
          </Content>
          <Content size="17px" bold={400} left="7px" vertical="bottom">
            {state[12].keyword}
          </Content>
        </Box>
        <Box>
          <Content size="19px" bold={500} right="7px">
            {state[9].keyword}
          </Content>
          <Content size="16px" vertical="top">
            {state[13].keyword}
          </Content>
          <Content size="28px" bold={500} vertical="bottom" right="3px">
            {state[3].keyword}
          </Content>
          <Content size="34px" bold={500} height="46px" left="5px">
            {state[0].keyword}
          </Content>
          <Content size="20px" vertical="bottom" left="10px">
            {state[8].keyword}
          </Content>
        </Box>
        <Box>
          <Content size="16px" vertical="bottom" bold={400}>
            {state[14].keyword}
          </Content>
          <Content size="32px" height="40px" bold={500} left="3px" right="7px">
            {state[1].keyword}
          </Content>
          <Content
            size="17px"
            vertical="bottom"
            bold={400}
            left="3px"
            right="2px"
          >
            {state[11].keyword}
          </Content>
          <Content size="24px" bold={500} left="2px">
            {state[5].keyword}
          </Content>
        </Box>
        <Box>
          <Content size="14px" vertical="top" left="15px" right="5px">
            {state[16].keyword}
          </Content>
          <Content
            size="26px"
            height="34px"
            vertical="bottom"
            left="2px"
            bold={400}
          >
            {state[4].keyword}
          </Content>
          <Content size="18px" left="4px">
            {state[10].keyword}
          </Content>
          <Content size="14px" left="10px" vertical="top">
            {state[17].keyword}
          </Content>
        </Box>
      </Wrapper>
    </>
  );
}
export default SimpleKeyword;
