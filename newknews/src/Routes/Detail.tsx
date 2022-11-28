import styled from "styled-components";
import Accordion from "../Components/articles";
import { Link } from "react-router-dom";
import Header from "../Components/Header";
import IssueDetail from "../Components/IssueDetail";

const Wrapper = styled.div`
  width: 1000px;
  min-width: 800px;
  margin: 0px auto;
`;
const Center = styled.div`
  width: 1000px;
  height: auto;
  text-align: center;
  margin: 0px auto;
`;
const Title = styled.h1`
  font-size: 22px;
  font-weight: 600;
  margin-bottom: 30px;
`;



function Detail() {
  return (
    <>
    <Header />
    <IssueDetail />
    <Wrapper>
      <Title>전체기사</Title>
    </Wrapper>
      {
        ServerAPI.forEach((item)=>{
          if(item.clusterNum==1){
            HeadLine1[HeadLine1Count]=item.title
            HeadLine1Count++
            ImageLink1[ImageLink1Count]=item.imageLink
            ImageLink1Count++
            Url1[Url1Count]=item.url
            Url1Count++
          }else if(item.clusterNum==2){
            HeadLine2[HeadLine2Count]=item.title
            HeadLine2Count++
            ImageLink2[ImageLink2Count]=item.imageLink
            ImageLink2Count++
            Url2[Url2Count]=item.url
            Url2Count++
          }else if(item.clusterNum==3){
            HeadLine3[HeadLine3Count]=item.title
            HeadLine3Count++
            ImageLink3[ImageLink3Count]=item.imageLink
            ImageLink3Count++
            Url3[Url3Count]=item.url
            Url3Count++
          }else if(item.clusterNum==4){
            HeadLine4[HeadLine4Count]=item.title
            HeadLine4Count++
            ImageLink4[ImageLink4Count]=item.imageLink
            ImageLink4Count++
            Url4[Url4Count]=item.url
            Url4Count++
          }else if(item.clusterNum==5){
            HeadLine5[HeadLine5Count]=item.title
            HeadLine5Count++
            ImageLink5[ImageLink5Count]=item.imageLink
            ImageLink5Count++
            Url5[Url5Count]=item.url
            Url5Count++
          }else if(item.clusterNum==6){
            HeadLine6[HeadLine6Count]=item.title
            HeadLine6Count++
            ImageLink6[ImageLink6Count]=item.imageLink
            ImageLink6Count++
            Url6[Url6Count]=item.url
            Url6Count++
          }else if(item.clusterNum==7){
            HeadLine7[HeadLine7Count]=item.title
            HeadLine7Count++
            ImageLink7[ImageLink7Count]=item.imageLink
            ImageLink7Count++
            Url7[Url7Count]=item.url
            Url7Count++
          }else if(item.clusterNum==8){
            HeadLine8[HeadLine8Count]=item.title
            HeadLine8Count++
            ImageLink8[ImageLink8Count]=item.imageLink
            ImageLink8Count++
            Url8[Url8Count]=item.url
            Url8Count++
          }else if(item.clusterNum==9){
            HeadLine9[HeadLine9Count]=item.title
            HeadLine9Count++
            ImageLink9[ImageLink9Count]=item.imageLink
            ImageLink9Count++
            Url9[Url9Count]=item.url
            Url9Count++
          }else if(item.clusterNum==10){
            HeadLine10[HeadLine10Count]=item.title
            HeadLine10Count++
            ImageLink10[ImageLink10Count]=item.imageLink
            ImageLink10Count++
            Url10[Url10Count]=item.url
            Url10Count++
          }
        })
      }
    <Center>
      <Accordion title={"이태원, 尹 대통령"} 
      contentA0={HeadLine1[0]} imageFileA0={ImageLink1[0]} articleLinkA0={Url1[0]}
      contentA1={HeadLine1[1]} imageFileA1={ImageLink1[1]} articleLinkA1={Url1[1]}
      contentA2={HeadLine1[2]} imageFileA2={ImageLink1[2]} articleLinkA2={Url1[2]}
      contentB0={HeadLine1[3]} imageFileB0={ImageLink1[3]} articleLinkB0={Url1[3]}
      contentB1={HeadLine1[4]} imageFileB1={ImageLink1[4]} articleLinkB1={Url1[4]}
      contentB2={HeadLine1[5]} imageFileB2={ImageLink1[5]} articleLinkB2={Url1[5]}/>
      <Accordion title={"북한"} 
      contentA0={HeadLine2[0]} imageFileA0={ImageLink2[0]} articleLinkA0={Url2[0]}
      contentA1={HeadLine2[1]} imageFileA1={ImageLink2[1]} articleLinkA1={Url2[1]}
      contentA2={HeadLine2[2]} imageFileA2={ImageLink2[2]} articleLinkA2={Url2[2]}
      contentB0={HeadLine2[3]} imageFileB0={ImageLink2[3]} articleLinkB0={Url2[3]}
      contentB1={HeadLine2[4]} imageFileB1={ImageLink2[4]} articleLinkB1={Url2[4]}
      contentB2={HeadLine2[5]} imageFileB2={ImageLink2[5]} articleLinkB2={Url2[5]}/>
      <Accordion title={"정진상"} 
      contentA0={HeadLine3[0]} imageFileA0={ImageLink3[0]} articleLinkA0={Url3[0]}
      contentA1={HeadLine3[1]} imageFileA1={ImageLink3[1]} articleLinkA1={Url3[1]}
      contentA2={HeadLine3[2]} imageFileA2={ImageLink3[2]} articleLinkA2={Url3[2]}
      contentB0={HeadLine3[3]} imageFileB0={ImageLink3[3]} articleLinkB0={Url3[3]}
      contentB1={HeadLine3[4]} imageFileB1={ImageLink3[4]} articleLinkB1={Url3[4]}
      contentB2={HeadLine3[5]} imageFileB2={ImageLink3[5]} articleLinkB2={Url3[5]}/> 
      <Accordion title={"광부 생환"} 
      contentA0={HeadLine4[0]} imageFileA0={ImageLink4[0]} articleLinkA0={Url4[0]}
      contentA1={HeadLine4[1]} imageFileA1={ImageLink4[1]} articleLinkA1={Url4[1]}
      contentA2={HeadLine4[2]} imageFileA2={ImageLink4[2]} articleLinkA2={Url4[2]}
      contentB0={HeadLine4[3]} imageFileB0={ImageLink4[3]} articleLinkB0={Url4[3]}
      contentB1={HeadLine4[4]} imageFileB1={ImageLink4[4]} articleLinkB1={Url4[4]}
      contentB2={HeadLine4[5]} imageFileB2={ImageLink4[5]} articleLinkB2={Url4[5]}/>
      <Accordion title={"정진석"} 
      contentA0={HeadLine5[0]} imageFileA0={ImageLink4[0]} articleLinkA0={Url4[0]}
      contentA1={HeadLine5[1]} imageFileA1={ImageLink4[1]} articleLinkA1={Url4[1]}
      contentA2={HeadLine5[2]} imageFileA2={ImageLink4[2]} articleLinkA2={Url4[2]}
      contentB0={HeadLine5[3]} imageFileB0={ImageLink4[3]} articleLinkB0={Url4[3]}
      contentB1={HeadLine5[4]} imageFileB1={ImageLink4[4]} articleLinkB1={Url4[4]}
      contentB2={HeadLine5[5]} imageFileB2={ImageLink4[5]} articleLinkB2={Url4[5]}/>
      <Accordion title={"한덕수"} 
      contentA0={HeadLine6[0]} imageFileA0={ImageLink4[0]} articleLinkA0={Url4[0]}
      contentA1={HeadLine6[1]} imageFileA1={ImageLink4[1]} articleLinkA1={Url4[1]}
      contentA2={HeadLine6[2]} imageFileA2={ImageLink4[2]} articleLinkA2={Url4[2]}
      contentB0={HeadLine6[3]} imageFileB0={ImageLink4[3]} articleLinkB0={Url4[3]}
      contentB1={HeadLine6[4]} imageFileB1={ImageLink4[4]} articleLinkB1={Url4[4]}
      contentB2={HeadLine6[5]} imageFileB2={ImageLink4[5]} articleLinkB2={Url4[5]}/>
      <Accordion title={"주제 7"} 
      contentA0={HeadLine7[0]} imageFileA0={ImageLink4[0]} articleLinkA0={Url4[0]}
      contentA1={HeadLine7[1]} imageFileA1={ImageLink4[1]} articleLinkA1={Url4[1]}
      contentA2={HeadLine7[2]} imageFileA2={ImageLink4[2]} articleLinkA2={Url4[2]}
      contentB0={HeadLine7[3]} imageFileB0={ImageLink4[3]} articleLinkB0={Url4[3]}
      contentB1={HeadLine7[4]} imageFileB1={ImageLink4[4]} articleLinkB1={Url4[4]}
      contentB2={HeadLine7[5]} imageFileB2={ImageLink4[5]} articleLinkB2={Url4[5]}/>
      <Accordion title={"주제 8"} 
      contentA0={HeadLine8[0]} imageFileA0={ImageLink4[0]} articleLinkA0={Url4[0]}
      contentA1={HeadLine8[1]} imageFileA1={ImageLink4[1]} articleLinkA1={Url4[1]}
      contentA2={HeadLine8[2]} imageFileA2={ImageLink4[2]} articleLinkA2={Url4[2]}
      contentB0={HeadLine8[3]} imageFileB0={ImageLink4[3]} articleLinkB0={Url4[3]}
      contentB1={HeadLine8[4]} imageFileB1={ImageLink4[4]} articleLinkB1={Url4[4]}
      contentB2={HeadLine8[5]} imageFileB2={ImageLink4[5]} articleLinkB2={Url4[5]}/>
      <Accordion title={"주제 9"} 
      contentA0={HeadLine9[0]} imageFileA0={ImageLink4[0]} articleLinkA0={Url4[0]}
      contentA1={HeadLine9[1]} imageFileA1={ImageLink4[1]} articleLinkA1={Url4[1]}
      contentA2={HeadLine9[2]} imageFileA2={ImageLink4[2]} articleLinkA2={Url4[2]}
      contentB0={HeadLine9[3]} imageFileB0={ImageLink4[3]} articleLinkB0={Url4[3]}
      contentB1={HeadLine9[4]} imageFileB1={ImageLink4[4]} articleLinkB1={Url4[4]}
      contentB2={HeadLine9[5]} imageFileB2={ImageLink4[5]} articleLinkB2={Url4[5]}/>
      <Accordion title={"주제 10"} 
      contentA0={HeadLine10[0]} imageFileA0={ImageLink4[0]} articleLinkA0={Url4[0]}
      contentA1={HeadLine10[1]} imageFileA1={ImageLink4[1]} articleLinkA1={Url4[1]}
      contentA2={HeadLine10[2]} imageFileA2={ImageLink4[2]} articleLinkA2={Url4[2]}
      contentB0={HeadLine10[3]} imageFileB0={ImageLink4[3]} articleLinkB0={Url4[3]}
      contentB1={HeadLine10[4]} imageFileB1={ImageLink4[4]} articleLinkB1={Url4[4]}
      contentB2={HeadLine10[5]} imageFileB2={ImageLink4[5]} articleLinkB2={Url4[5]}/>
    </Center>
    </>
  );
}

let HeadLine1:string[]=[]
var HeadLine1Count = 0
let ImageLink1:string[]=[]
var ImageLink1Count = 0
let Url1:string[]=[]
var Url1Count = 0

let HeadLine2:string[]=[]
var HeadLine2Count = 0
let ImageLink2:string[]=[]
var ImageLink2Count = 0
let Url2:string[]=[]
var Url2Count = 0

let HeadLine3:string[]=[]
var HeadLine3Count = 0
let ImageLink3:string[]=[]
var ImageLink3Count = 0
let Url3:string[]=[]
var Url3Count = 0

let HeadLine4:string[]=[]
var HeadLine4Count = 0
let ImageLink4:string[]=[]
var ImageLink4Count = 0
let Url4:string[]=[]
var Url4Count = 0

let HeadLine5:string[]=[]
var HeadLine5Count = 0
let ImageLink5:string[]=[]
var ImageLink5Count = 0
let Url5:string[]=[]
var Url5Count = 0

let HeadLine6:string[]=[]
var HeadLine6Count = 0
let ImageLink6:string[]=[]
var ImageLink6Count = 0
let Url6:string[]=[]
var Url6Count = 0

let HeadLine7:string[]=[]
var HeadLine7Count = 0
let ImageLink7:string[]=[]
var ImageLink7Count = 0
let Url7:string[]=[]
var Url7Count = 0

let HeadLine8:string[]=[]
var HeadLine8Count = 0
let ImageLink8:string[]=[]
var ImageLink8Count = 0
let Url8:string[]=[]
var Url8Count = 0

let HeadLine9:string[]=[]
var HeadLine9Count = 0
let ImageLink9:string[]=[]
var ImageLink9Count = 0
let Url9:string[]=[]
var Url9Count = 0

let HeadLine10:string[]=[]
var HeadLine10Count = 0
let ImageLink10:string[]=[]
var ImageLink10Count = 0
let Url10:string[]=[]
var Url10Count = 0

const ServerAPI = [
  {
    clusterNum: 1,
    title: `尹대통령, 엿새째 합동분향소 조문…한덕수·이상민 동행`,
    press: "YTN",
    imageLink: "https://cdn.lamanus.kr/wp-content/uploads/2018/08/28225854/google-2048x1536.png",
    url: "https://v.daum.net/v/20221105110332075",
    type: "1"
  },
  {
    clusterNum: 1,
    title: `尹, 국가애도기간 마지막 날 합동분향소 조문···한덕수·이상민 동행`,
    press: "연합뉴스",
    imageLink: "https://cdn.lamanus.kr/wp-content/uploads/2018/08/28225854/google-2048x1536.png",
    url: "https://v.daum.net/v/20221105112435359",
    type: "1"
  },
  {
    clusterNum: 1,
    title: `尹, 국가애도기간 마지막날 합동분향소 조문...총리·이상민 등 국무위원 동행`,
    press: "",
    imageLink: "https://cdn.lamanus.kr/wp-content/uploads/2018/08/28225854/google-2048x1536.png",
    url: "https://v.daum.net/v/20221105104920896",
    type: "1"
  },
  {
    clusterNum: 1,
    title: `尹대통령 "청년들 못지킨 미안함 영원히 남을 것"`,
    press: "",
    imageLink: "https://cdn.lamanus.kr/wp-content/uploads/2018/08/28225854/google-2048x1536.png",
    url: "https://v.daum.net/v/20221105110332075",
    type: "0"
  },
  {
    clusterNum: 1,
    title: `윤 대통령 "청년들 못 지킨 미안함 영원히 떠나지 않을 것"`,
    press: "",
    imageLink: "https://cdn.lamanus.kr/wp-content/uploads/2018/08/28225854/google-2048x1536.png",
    url: "https://v.daum.net/v/20221105153900507",
    type: "0"
  },
  {
    clusterNum: 1,
    title: `尹 “꽃다운 청년들 지켜주지 못한 미안한 마음 영원히 떠나지 않을 것” [이태원 핼러윈 참사]`,
    press: "",
    imageLink: "https://cdn.lamanus.kr/wp-content/uploads/2018/08/28225854/google-2048x1536.png",
    url: "https://v.daum.net/v/20221105155411725",
    type: "0"
  },
  
  {
    clusterNum: 2,
    title: `비질런트 스톰 오늘 마무리…미 전략자산 B-1B 출격으로 대미 장식하나`,
    press: "",
    imageLink: "https://cdn.lamanus.kr/wp-content/uploads/2018/08/28225854/google-2048x1536.png",
    url: "https://v.daum.net/v/20221105122416055",
    type: "1"
  },
  {
    clusterNum: 2,
    title: `합참 “북, 단거리 탄도미사일 4발 서해상으로 발사 포착”`,
    press: "",
    imageLink: "https://cdn.lamanus.kr/wp-content/uploads/2018/08/28225854/google-2048x1536.png",
    url: "https://v.daum.net/v/20221105172042132",
    type: "1"
  },
  {
    clusterNum: 2,
    title: `합참 “北, 단거리탄도미사일 4발 서해상 발사 포착”`,
    press: "",
    imageLink: "https://cdn.lamanus.kr/wp-content/uploads/2018/08/28225854/google-2048x1536.png",
    url: "https://v.daum.net/v/20221105172712244",
    type: "1"
  },
  {
    clusterNum: 2,
    title: `'비질런트 스톰' 오늘 마무리‥훈련 중 북한 도발 이어가`,
    press: "",
    imageLink: "https://cdn.lamanus.kr/wp-content/uploads/2018/08/28225854/google-2048x1536.png",
    url: "https://v.daum.net/v/20221105115700721",
    type: "0"
  },
  {
    clusterNum: 2,
    title: `北 떨게 한 '비질런트 스톰'…'죽음의 백조' B-1B 대미 장식할까`,
    press: "",
    imageLink: "https://cdn.lamanus.kr/wp-content/uploads/2018/08/28225854/google-2048x1536.png",
    url: "https://v.daum.net/v/20221105112905427",
    type: "0"
  },
  {
    clusterNum: 2,
    title: `북한, 동해 아닌 서해로 SRBM 4발 발사 ‘이례적’…B-1B 투입 반발?`,
    press: "",
    imageLink: "https://cdn.lamanus.kr/wp-content/uploads/2018/08/28225854/google-2048x1536.png",
    url: "https://v.daum.net/v/20221105174902629",
    type: "0"
  },

  {
    clusterNum: 3,
    title: ``,
    press: "",
    imageLink: "",
    url: "",
    type: "1"
  },
  {
    clusterNum: 3,
    title: ``,
    press: "",
    imageLink: "",
    url: "",
    type: "1"
  },
  {
    clusterNum: 3,
    title: ``,
    press: "",
    imageLink: "",
    url: "",
    type: "1"
  },
  {
    clusterNum: 3,
    title: ``,
    press: "",
    imageLink: "",
    url: "",
    type: "0"
  },
  {
    clusterNum: 3,
    title: ``,
    press: "",
    imageLink: "",
    url: "",
    type: "0"
  },
  {
    clusterNum: 3,
    title: ``,
    press: "",
    imageLink: "",
    url: "",
    type: "0"
  },

  {
    clusterNum: 4,
    title: ``,
    press: "",
    imageLink: "",
    url: "",
    type: "1"
  },
  {
    clusterNum: 4,
    title: ``,
    press: "",
    imageLink: "",
    url: "",
    type: "1"
  },
  {
    clusterNum: 4,
    title: ``,
    press: "",
    imageLink: "",
    url: "",
    type: "1"
  },
  {
    clusterNum: 4,
    title: ``,
    press: "",
    imageLink: "",
    url: "",
    type: "0"
  },
  {
    clusterNum: 4,
    title: ``,
    press: "",
    imageLink: "",
    url: "",
    type: "0"
  },
  {
    clusterNum: 4,
    title: ``,
    press: "",
    imageLink: "",
    url: "",
    type: "0"
  },

  {
    clusterNum: 5,
    title: ``,
    press: "",
    imageLink: "",
    url: "",
    type: "1"
  },
  {
    clusterNum: 5,
    title: ``,
    press: "",
    imageLink: "",
    url: "",
    type: "1"
  },
  {
    clusterNum: 5,
    title: ``,
    press: "",
    imageLink: "",
    url: "",
    type: "1"
  },
  {
    clusterNum: 5,
    title: ``,
    press: "",
    imageLink: "",
    url: "",
    type: "1"
  },
  {
    clusterNum: 5,
    title: ``,
    press: "",
    imageLink: "",
    url: "",
    type: "1"
  },
  {
    clusterNum: 5,
    title: ``,
    press: "",
    imageLink: "",
    url: "",
    type: "1"
  },

  {
    clusterNum: 6,
    title: ``,
    press: "",
    imageLink: "",
    url: "",
    type: "1"
  },
  {
    clusterNum: 6,
    title: ``,
    press: "",
    imageLink: "",
    url: "",
    type: "1"
  },
  {
    clusterNum: 6,
    title: ``,
    press: "",
    imageLink: "",
    url: "",
    type: "1"
  },
  {
    clusterNum: 6,
    title: ``,
    press: "",
    imageLink: "",
    url: "",
    type: "1"
  },
  {
    clusterNum: 6,
    title: ``,
    press: "",
    imageLink: "",
    url: "",
    type: "1"
  },
  {
    clusterNum: 6,
    title: ``,
    press: "",
    imageLink: "",
    url: "",
    type: "1"
  },

  {
    clusterNum: 7,
    title: ``,
    press: "",
    imageLink: "",
    url: "",
    type: "1"
  },
  {
    clusterNum: 7,
    title: ``,
    press: "",
    imageLink: "",
    url: "",
    type: "1"
  },
  {
    clusterNum: 7,
    title: ``,
    press: "",
    imageLink: "",
    url: "",
    type: "1"
  },
  {
    clusterNum: 7,
    title: ``,
    press: "",
    imageLink: "",
    url: "",
    type: "1"
  },
  {
    clusterNum: 7,
    title: ``,
    press: "",
    imageLink: "",
    url: "",
    type: "1"
  },
  {
    clusterNum: 7,
    title: ``,
    press: "",
    imageLink: "",
    url: "",
    type: "1"
  }, 
];

export default Detail;
