/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Link, withRouter, useHistory } from 'react-router-dom';
import { FiArrowDown } from 'react-icons/fi';
import photo from '../images/sideA.png';
import Top1p from '../images/SodaPDF-converted-베스트막거리 케러셀.png';
import Top2p from '../images/SodaPDF-converted-막걸리 인피니트 스크롤.png';
import Top3p from '../images/SodaPDF-converted-막걸리 반응형.png';

const SecondRending = () => {
  const animatedbang = keyframes`

  0%{transform:translateY(10px);}
  
  50%{transform:translateY(-20px);}
  
  100%{transform:translateY(10px);}
  `;
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
  `;
  const Makgeolli = styled.h1`
    color: white;
    font-family: 'Sansation';
    font-weight: lighter;
    width: 50vw;
    padding: 1vw;
    font-size: 10vw;
    transition-duration: 1s;
    @media ${props => props.theme.tablet} {
      padding: 1vw;
      color: white;
      font-family: 'Sansation';
      font-weight: lighter;
      width: 50vw;
      font-size: 10vw;
      transition-duration: 1s;
      &:hover {
        font-size: 12vw;
      }
    }
    @media ${props => props.theme.desktop} {
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
    }
  `;
  const More = styled.button`
    display: flex;
    font-family: 'Nanum Gothic';
    justify-content: center;
    align-items: center;
    margin-top: 2vh;
    margin-left: 8vw;
    background-color: rgba(255, 100, 100, 1);
    color: white;
    text-align: center;
    width: 80vw;
    height: 5vh;
    border-radius: 10px;
    border: none;
    @media ${props => props.theme.tablet} {
      background-color: rgba(255, 100, 100, 1);
      font-family: 'Nanum Gothic';
      color: white;
      float: right;
      text-align: center;
      width: 20vw;
      height: 5vh;
      border-radius: 10px;
      border: none;
      margin: 1vw;
      transition-duration: 1s;
      &:hover {
        width: 22vw;
        height: 6vh;
      }
    }
  `;
  const Speaking = styled.div`
    display: none;
    @media ${props => props.theme.tablet} {
      display: none;
    }
    @media ${props => props.theme.desktop} {
      display: flex;
      position: absolute;
      top: 40%;
      right: 3%;
      width: 20vw;
      height: 40vh;
      transition-duration: 1s;
      &:hover {
        transform: translate(-10px, -10px);
      }
    }
  `;
  const InnerContent = styled.h2`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 2vw;
    width: 100%;
    color: white;
    font-weight: bold;
    height: 70vh;
    font-family: 'Nanum Gothic', sans-serif;
    background-color: rgba(0, 0, 10, 0.1);
    font-size: 2rem;
    transition-duration: 1s;
    @media ${props => props.theme.tablet} {
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 2vw;
      width: 95vw;
      color: white;
      font-weight: bold;
      height: 60vh;
      font-family: 'Nanum Gothic', sans-serif;
      background-color: rgba(0, 0, 10, 0.1);
      font-size: 4vw;
      animation: ${contentSlide} 1s 0.5s;
      animation-fill-mode: backwards;
      transition-duration: 1s;
      &:hover {
        transform: translateX(10px) translateY(-10px);
      }
    }
    @media ${props => props.theme.desktop} {
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
      font-size: 2vw;
      animation: ${contentSlide} 2s 0.5s;
      animation-fill-mode: backwards;
      transition-duration: 1s;
      &:hover {
        transform: translateX(10px) translateY(-10px);
      }
    }
  `;
  const Brewerys = styled.div`
    color: white;
    text-align: center;
    padding-top: 3vh;
    animation: ${animatedbang} 2s infinite;
    @media ${props => props.theme.tablet} {
      color: white;
      text-align: center;
      cursor: pointer;
      transition-duration: 1s;
      animation: ${animatedbang} 2s infinite;
      &:hover {
        color: #293848;
      }
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
  const toBre = () => {
    window.scrollTo({ top: 2000, left: 0, behavior: 'smooth' });
  };
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
          30만 주당유저들과 함께 여러분들의 최고의 막거리를 소개해주세요!
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
      <Speaking>
        <img src={photo} alt="sideA" />
      </Speaking>
      <Brewerys onClick={toBre}>
        <FiArrowDown size="40" />
      </Brewerys>
    </SecondChapter>
  );
};

export default SecondRending;
