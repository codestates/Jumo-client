import React from 'react';
import styled from 'styled-components';
import Styled from 'styled-components';
import Nav from './Nav';
import MakImg from '../images/intro-sec1.png';
import TrashBinImg from '../images/trash-bin.png';

//TODO ---------- MY PROFILE
const Section = styled.section`
  display: flex;
  flex-direction: column;
  margin: 0;
  @media screen and (min-width: 480px) and (max-width: 768px) {
    // 테블릿
    display: flex;
    flex-direction: column;
    margin: 0px;
  }
  @media screen and (min-width: 769px) {
    // 데스크탑
    display: flex;
    flex-direction: column;
    margin-left: 50px;
  }
`;
const MyProfile = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  margin: 0px;
  font-size: 20px;
  background: linear-gradient(to bottom, #c29b86, white);
  @media screen and (min-width: 480px) and (max-width: 768px) {
    // 테블릿
    display: flex;
    flex-direction: column;
    /* background-color : #C29B86; */
    background-color: orange;
    width: 100vw;
    height: 100vh;
    margin: 0px;
    font-size: 20px;
  }
  @media screen and (min-width: 769px) {
    // 데스크탑
    display: flex;
    flex-direction: column;
    background-color: #c29b86;
    width: 19vw;
    height: 50vh;
    margin-left: 9rem;
    margin-top: 40px; // header height ref
    margin-bottom: 6rem;
    font-size: 20px;
  }
`;
const MyProfileTitle = styled.div`
  display: flex;
  flex-direction: row;
  color: #e7d1bf;
  font-size: 2.5em;
  align-items: center;
  justify-content: center;
  margin-top: 40%;
  margin-bottom: 15%;
  @media screen and (min-width: 480px) and (max-width: 768px) {
    // 테블릿
    display: flex;
    text-indent: none;
    margin-top: 40%;
    margin-bottom: 15%;
    font-size: 3em;
  }
  @media screen and (min-width: 769px) {
    // 데스크탑
    display: flex;
    flex-direction: row;
    text-indent: 2em;
    margin-top: 20%;
    margin-bottom: 30%;
    font-size: 3em;
    text-indent: 4em;
  }
`;
const MyProfileList = styled.li`
  display: flex;
  flex-direction: column;
  list-style: none;
  color: #293848;
  background-color: pink;
  font-weight: bold;
  align-items: center;
  font-size: 1em;
`;
const MyProfileContent = styled.li`
  display: flex;
  flex-direction: column;
  list-style: none;
  color: black;
  font-weight: bold;
  align-items: center;
  font-size: 0.9em;
  margin: 0.5em;
`;

// TODO -------------ANIMATION HELLO
const MyProfileHello = styled.div`
  display: flex;
  color: deeppink;
`;

// TODO -------------- MY BTN
const MyBtn = styled.div`
  display: flex;
  flex-direction: row;
  /* align-items : baseline; */
  /* align-content : baseline; */

  /* flex-wrap : wrap; */
`;
const MyReviewBtn = styled.button`
  display: flex;
  width: 53vw;
  height: 10vh;
  justify-content: center;
  align-items: center;
  /* align-self: baseline;  */
  /* align-items : baseline; */
  box-shadow: inset -2px 5px 5px #ccb49f;
  background-color: #e7d1bf;
  color: white;
  font-size: 1.6em;
  font-weight: 500;
  text-shadow: 2.5px 5px 4px #a39283;
  border: 2px solid #e7d1bf;
  z-index: 1;
  @media screen and (min-width: 480px) and (max-width: 768px) {
    // 테블릿
    display: flex;
  }
  @media screen and (min-width: 769px) {
    // 데스크탑
  }
`;
const MyFavBtn = styled.button`
  display: flex;
  width: 47vw;
  height: 10vh;
  justify-content: center;
  align-items: center;
  align-self: center;
  background-color: white;
  color: #c29b86;
  font-size: 1.4em;
  font-weight: 500;
  border: 2px solid #c29b86;
  text-shadow: 2.5px 5px 4px #c4b7ab;
  box-shadow: inset -2px 3px 5px #ccb49f;
  padding-bottom: 0px;
`;

//TODO ----------------REVIEWS CONTENTS

const MyReviews = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #e7d1bf;
  width: 100vw;
  height: 100vh;
  padding-bottom: 5em;
  justify-content: center;
`;
const MyReviewsBox = styled.div`
  display: flex;
  flex-direction: row;
  width: 80vw;
  height: 23vh;
  background-color: #ffffff;
  justify-content: center;
  align-items: center;
  margin: 1em;
`;

const MyReviewImg = styled.img`
  display: flex;
  width: 8em;
  height: 10em;
  padding: 0.5em;
  border: 3px dashed blue;
`;
const MyReviewContent = styled.div`
  display: block;
  background-color: pink;
  border: 3px dashed skyblue;
  width: 40vw;
  height: 20vh;
  overflow: hidden;
  text-overflow: ellipsis;
  padding-top: 0.5em;
  padding-left: 0.5em;
`;
const MyReviewCreatedAt = styled.div`
  display: flex;
  color: gray;
  font-size: 0.9em;
`;
const MyReviewReview = styled.div`
  display: inline-block;
  width: 35vw;
  height: 9vh;
  white-space: nowrap;
  overflow: scroll;
  color: black;
  font-size: 1.2em;
  text-indent: 0.3em;
  border: 1px solid red;
`;
const MyReviewBtnBox = styled.div`
  display: flex;
  flex-direction: row;
  border: 3px dashed blue;
  justify-content: flex-end;
  padding-right: 0.5em;
  padding-top: 0.5em;
`;
const MyReviewEditBtn = styled.button`
  margin-left: 0.3em;
`;
const MyReviewDeleteBtn = styled.button`
  margin-left: 0.3em;
`;

//TODO ---------------- FAVS CONTENTS
const MyFavs = styled.div`
  display: flex;
  background-color: #c29b86;
  width: 100vw;
  height: 100vh; // 신경 안써도 됨
  z-index: 2;
  padding-bottom: 5em;
`;
const MyFavsBox = styled.div`
  border: 3px dashed deeppink;
  display: inline-block;
  flex-direction: column;
  margin: 2em;
  /* flex-direction : column; */
`;
const MyFavImg = styled.img`
  border: 3px solid white;
  display: inline-block;
  justify-content: flex-start;
  align-items: center;
  width: 8em;
  height: 10em;
  padding: 0.3em;
  margin: 1em;
  padding: 10px;
  box-shadow: 2px 1px 3px white;
  flex-wrap: wrap;
  flex-shrink: 1;
`;
const MyFavDeleteBtn = styled.img`
  border: 3px dashed yellow;
  display: flex;
  width: 6em;
  height: 7em;
  justify-content: center;
  align-items: center;
  margin-top: 40vh;
  margin-right: 1.5em;
`;

const Mypage = () => {
  const makImg = MakImg;
  const trashBinImg = TrashBinImg;

  return (
    <div>
      <Nav />
      <Section>
        <MyProfile>
          <MyProfileTitle>MY&nbsp;PROFILE</MyProfileTitle>
          <MyProfileList>Nickname</MyProfileList>
          <MyProfileContent>willy LEE</MyProfileContent>
          <button>edit</button>
          <MyProfileList>Email</MyProfileList>
          <MyProfileContent>willy@gmail.com</MyProfileContent>
          <MyProfileList>Registered Date</MyProfileList>
          <MyProfileContent>2020-02-02</MyProfileContent>
        </MyProfile>

        <MyProfileHello>Hello #username! Wellcome back!</MyProfileHello>

        <MyBtn>
          <MyReviewBtn>MY REVIEWS</MyReviewBtn>
          <MyFavBtn>MY FAVORITES</MyFavBtn>
        </MyBtn>

        <MyReviews>
          <MyReviewsBox>
            <MyReviewImg src={makImg} alt="makImg" />
            <MyReviewContent>
              <MyReviewCreatedAt>2020-02-02</MyReviewCreatedAt>
              <MyReviewReview>야미!dfdddddfdfdfdffdfdfd</MyReviewReview>
              <MyReviewBtnBox>
                <MyReviewEditBtn>edit</MyReviewEditBtn>
                {/* edit을 click하면, review는 그대로 있고 input으로..... */}
                <MyReviewDeleteBtn>delete</MyReviewDeleteBtn>
              </MyReviewBtnBox>
            </MyReviewContent>
          </MyReviewsBox>
        </MyReviews>

        <MyFavs>
          <MyFavsBox>
            <MyFavImg src={makImg} alt="makImg" />
            <MyFavImg src={makImg} alt="makImg" />
            <MyFavImg src={makImg} alt="makImg" />
            <MyFavImg src={makImg} alt="makImg" />
            <MyFavImg src={makImg} alt="makImg" />
            <MyFavImg src={makImg} alt="makImg" />
          </MyFavsBox>
          <MyFavDeleteBtn src={trashBinImg} alt="trashBin" />
          {/* 저기요 // 쓰레기통 흔들 */}
        </MyFavs>
      </Section>
    </div>
  );
};

export default Mypage;