import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Link, withRouter, useHistory } from 'react-router-dom';
import { FiArrowUp } from 'react-icons/fi';
import photo from '../images/BreweyMini.jpeg';
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
  const Photo = styled.img`
    width: 72vw;
    height: 50vh;
    position: absolute;
    margin-top: 3vw;
    font-family: 'Sansation';
    top: 25%;
    left: 15%;
    z-index: 0;
    border-radius: 30px;
    transition-duration: 0.5s;
    @media ${props => props.theme.tablet} {
      width: 60vw;
      height: 60vh;
      color: white;
      position: absolute;
      top: 25%;
      left: 20%;
      z-index: 0;
      border-radius: 30px;
      transition-duration: 0.5s;
    }
  `;
  const Gif = styled.img`
    position: relative;
    width: 30vw;
    height: 40vh;
    left: 12%;
    top: 20%;
    border-radius: 10px;
    transition-duration: 1s;
    z-index: 1;
    @media ${props => props.theme.tablet} {
      position: relative;
      left: 30%;
      top: 20%;
      width: 40vw;
      height: 44vh;
      transition-duration: 1s;
      z-index: 1;
      &:hover {
        padding-right: 1vw;
        width: 42vw;
        height: 42vh;
      }
    }
  `;
  return (
    <FirstChapter>
      <Link to="/brewery/info">
        <FirstTitle>Brewerys</FirstTitle>
        <Photo src={photo} alt="photo" />
        <Gif src={brew} alt="photo" />
      </Link>
      <Top onClick={scrollToTop}>
        <FiArrowUp size="40" />
      </Top>
    </FirstChapter>
  );
}

export default FirstRending;
