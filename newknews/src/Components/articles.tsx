import styled from "styled-components";
import { useState } from "react";

const Leftframe = styled.div`
  float: left;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  width: 450px;
  margin: 10px 25px;
`;
const Rightframe = styled.div`
  float: right;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  width: 450px;
  margin: 10px 25px;
`;
const ImageWrapper = styled.div`
  float: left;
  margin: 1vw;
  width: 100px;
  height: auto;
  display: flex;
  align-items: center;
  img{
    width: 80px;
    height: 40px;
  }
`;
const HeadlineWrapper = styled.div`
  float: right;
  width: 300px;
  height: auto;
  text-align: left;
  display: flex;
  align-items: center;
  justify-content: center;
`;

var linkA0 = "https://";
var linkA1 = "https://";
var linkA2 = "https://";
var linkB0 = "https://";
var linkB1 = "https://";
var linkB2 = "https://";

function Accordion({title,
    contentA0,imageFileA0,articleLinkA0,
    contentA1,imageFileA1,articleLinkA1,
    contentA2,imageFileA2,articleLinkA2,
    contentB0,imageFileB0,articleLinkB0,
    contentB1,imageFileB1,articleLinkB1,
    contentB2,imageFileB2,articleLinkB2}: any){
    const [isCheck, setCheck] = useState(false);

    linkA0 = articleLinkA0
    linkA1 = articleLinkA1
    linkA2 = articleLinkA2
    linkB0 = articleLinkB0
    linkB1 = articleLinkB1
    linkB2 = articleLinkB2

    return(
        <>
            <div style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "10px",
                boxSizing: "border-box",
                backgroundColor: "#DCDCDC",
                width: "100%",
                height: "60px",
                color: "#000",
                margin: "5px 0px"
            }}>
                <h1 style={{ fontSize: "20px"}}>{title}</h1>
                <button onClick={() => {
                    setCheck((e) => !e);
                }}>
                    {isCheck ? "-" : "+"}
                </button>
            </div>
            {isCheck && (
                <p style={{
                    margin: "0",
                    backgroundColor: "skyblue",                    
                }}>
                    <Leftframe>
                        Type A
                    </Leftframe>
                    <Rightframe>
                        Type B
                    </Rightframe>
                    <Leftframe>
                        <ImageWrapper>
                            <img src={imageFileA0}/>
                        </ImageWrapper>
                        <HeadlineWrapper onClick={MouseClickEventA0}>
                            {contentA0}
                        </HeadlineWrapper>
                    </Leftframe>

                    <Rightframe>
                        <ImageWrapper>
                            <img src={imageFileB0}/>
                        </ImageWrapper>
                        <HeadlineWrapper onClick={MouseClickEventB0}>
                            {contentB0}
                        </HeadlineWrapper>
                    </Rightframe>

                    <Leftframe>
                        <ImageWrapper>
                            <img src={imageFileA1}/>
                        </ImageWrapper>
                        <HeadlineWrapper onClick={MouseClickEventA1}>
                            {contentA1}
                        </HeadlineWrapper>
                    </Leftframe>

                    <Rightframe>
                        <ImageWrapper>
                            <img src={imageFileB1}/>
                        </ImageWrapper>
                        <HeadlineWrapper onClick={MouseClickEventB1}>
                            {contentB1}
                        </HeadlineWrapper>
                    </Rightframe>

                    <Leftframe>
                        <ImageWrapper>
                            <img src={imageFileA2}/>
                        </ImageWrapper>
                        <HeadlineWrapper onClick={MouseClickEventA2}>
                            {contentA2}
                        </HeadlineWrapper>
                    </Leftframe>

                    <Rightframe>
                        <ImageWrapper>
                            <img src={imageFileB2}/>
                        </ImageWrapper>
                        <HeadlineWrapper onClick={MouseClickEventB2}>
                            {contentB2}
                        </HeadlineWrapper>
                    </Rightframe>
                </p>
            )}
            {!isCheck}
        </>
    );
}

function MouseClickEventA0(){
    window.open(linkA0);
}
function MouseClickEventA1(){
    window.open(linkA1);
}
function MouseClickEventA2(){
    window.open(linkA2);
}
function MouseClickEventB0(){
    window.open(linkB0);
}
function MouseClickEventB1(){
    window.open(linkB1);
}
function MouseClickEventB2(){
    window.open(linkB2);
}
export default Accordion;