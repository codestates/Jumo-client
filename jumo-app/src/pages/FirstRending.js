import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Link, withRouter, useHistory } from 'react-router-dom';
import { FiArrowUp } from 'react-icons/fi';
import brew from '../images/양조장-데스크탑.gif';

function FirstRending() {
  const animatedbang = keyframes`

  0%{transform:translateY(10px);}
  
  50%{transform:translateY(-20px);}
  
  100%{transform:translateY(10px);}
  `;
  const FirstChapter = styled.div`
    transition-duration: 1s;
    animation-fill-mode: forwards;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    padding-left: 10vw;
    width: 100vw;
    height: 100vh;
  `;
  const FirstTitle = styled.div`
    color: white;
    font-size: 15vw;
    font-family: 'Sansation';
    text-transform: uppercase;
    padding-left: 1rem;
    z-index: 10;
    animation-fill-mode: backwards;
    transition-duration: 1s;
    @media ${props => props.theme.tablet} {
      color: white;
      width: 100vw;
      font-size: 11vw;
      font-family: 'Sansation';
      text-transform: uppercase;
      z-index: 10;
      animation-fill-mode: backwards;
      transition-duration: 1s;
      &:hover {
        width: 90vw;
        font-size: 13vw;
        border-bottom: 3px solid white;
        transform: translateY(-3vh);
        color: #f0c84d;
        border-color: #f0c84d;
      }
    }
  `;
  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };
  const Top = styled.div`
    color: white;
    position: relative;
    text-align: center;
    top: 3%;
    cursor: pointer;
    transition-duration: 1s;
    animation: ${animatedbang} 2s infinite;
    &:hover {
      color: #293848;
    }
  `;
  const Gif = styled.img`
    width: 30vw;
    height: 40vh;
    left: 12%;
    top: 20%;
    border-radius: 10px;
    transition-duration: 1s;
    z-index: 1;
    @media ${props => props.theme.tablet} {
      left: 30%;
      top: 20%;
      width: 30vw;
      height: 34vh;
      transition-duration: 1s;
      z-index: 1;
      &:hover {
        padding-right: 1vw;
        width: 32vw;
        height: 32vh;
      }
    }
  `;
  const Text = styled.div`
    font-size: 3vw;
    width: 50vw;
  `;
  const But = styled.button`
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
  `;
  const Content = styled.div`
    display: flex;
    justify-content: space-between;
  `;
  return (
    <FirstChapter>
      <FirstTitle>Brewerys</FirstTitle>
      <Content>
        <div>
          <Text>
            {' '}
            전국의 모든 양조장을 검색하고 직접찾아가보세요!
            <br /> 직접찾아가서 마셔보면 맛이 2배!
          </Text>
          <Link to="/brewery/info">
            <But type="button">지금 검색하러 가기</But>
          </Link>
        </div>
        <div>
          <Gif src={brew} alt="photo" />
        </div>
      </Content>
      <Top onClick={scrollToTop}>
        <FiArrowUp size="40" />
      </Top>
    </FirstChapter>
  );
}

export default FirstRending;
