/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Link, withRouter, useHistory } from 'react-router-dom';
import Top1p from '../images/막걸리상세페이지-데스크탑.gif';
import Top2p from '../images/베스트막걸리캐러셀n인피니티-데스크탑.gif';
import Top3p from '../images/막걸리상세페이지최종-모바일.gif';

const SecondRending = () => {
  const contentSlide = keyframes`
    from {
      transform: translateX(-1200px);
    }
    to {
      transform: translateX(0px);
    }
  `;
  const SecondChapter = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 0.5vw;
    width: 100vw;
    height: 100vh;
    padding-left: 10vw;
  `;
  const Makgeolli = styled.h1`
    margin-top: 2vh;
    margin-bottom: 2vh;
    padding: 1vw;
    color: white;
    font-family: 'Sansation';
    font-weight: lighter;
    width: 50vw;
    font-size: 10vw;
    transition-duration: 1s;
    &:hover {
      font-size: 12vw;
      color: #445f56;
    }
  `;
  const More = styled.button`
    background-color: rgba(255, 100, 100, 1);
    font-family: 'Nanum Gothic';
    color: white;
    float: right;
    text-align: center;
    width: 28vw;
    height: 5vh;
    border-radius: 10px;
    border: none;
    margin: 1vw;
    transition-duration: 1s;
    &:hover {
      width: 22vw;
      height: 6vh;
    }
  `;
  const InnerContent = styled.h2`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 2vw;
    width: 70vw;
    color: white;
    font-weight: bold;
    height: 60vh;
    font-family: 'Nanum Gothic', sans-serif;
    background-color: rgba(0, 0, 10, 0.1);
    font-size: 1.3rem;
    animation: ${contentSlide} 2s 0.5s;
    animation-fill-mode: backwards;
    transition-duration: 1s;
    &:hover {
      transform: translateX(10px) translateY(-10px);
    }
  `;
  const Top = styled.div`
    display: flex;
    padding: 1vw;
    flex-direction: row;
    justify-content: space-around;
    @media ${props => props.theme.tablet} {
      display: flex;
      justify-content: space-between;
    }
  `;
  const Top1 = styled.img`
    width: 30vw;
    height: 29vh;
    @media ${props => props.theme.tablet} {
      width: 25vw;
      height: 29vh;
      transition-duration: 1s;
      &:hover {
        width: 23vw;
        height: 31vh;
      }
    }
  `;
  const Top2 = styled.img`
    width: 30vw;
    height: 29vh;
    @media ${props => props.theme.tablet} {
      width: 25vw;
      height: 29vh;
      transition-duration: 1s;
      &:hover {
        width: 23vw;
        height: 31vh;
      }
    }
  `;
  const Top3 = styled.img`
    width: 0vw;
    height: 0vh;
    @media ${props => props.theme.desktop} {
      width: 10vw;
      height: 29vh;
      transition-duration: 1s;
      &:hover {
        width: 12vw;
        height: 31vh;
      }
    }
  `;
  const Div = styled.div`
    transition-duration: 1s;
    line-height: 150%;
    &:hover {
      color: rgba(255, 100, 100, 0.8);
    }
  `;
  return (
    <SecondChapter>
      <Makgeolli>MAKGEOLLI</Makgeolli>
      <InnerContent>
        <Div>
          다양한 막걸리를 구경하고 맛보고 평점을 주세요!
          <br />
          데스크탑에서도, 쇼파에 누워서 ipad, 핸드폰으로도 편하게 즐겨보세요!
          <br />
        </Div>
        <Top>
          <Top1 src={Top1p} alt="photo" />
          <Top2 src={Top2p} alt="photo" />
          <Top3 src={Top3p} alt="photo" />
        </Top>
        <Link to="/makgeolli/info">
          <More>다른 막걸리 보러가기</More>
        </Link>
      </InnerContent>
    </SecondChapter>
  );
};

export default SecondRending;
