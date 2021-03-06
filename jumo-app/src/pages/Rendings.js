/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import styled from 'styled-components';
import TitleRending from './TitleRending';
import FirstRending from './FirstRending';
import SecondRending from './SecondRending';
import background from '../images/Background2.png';
import useScrollFadeIn from './useScrollFadeIn';
import useScrollClipPath from './useScrollClipPath';

const Rending = () => {
  return (
    <>
      <Background>
        <TitleRending />
        <div {...useScrollFadeIn('up', 1, 0)}>
          <SecondRending />
        </div>
      </Background>
    </>
  );
};

const Background = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  z-index: 0;
  top: 0;
  left: 0;
  background-color: #e7d1bf;
  background-size: cover;
  width: auto;
  height: auto;
  @media ${props => props.theme.tablet} {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 0;
    background-color: #e7d1bf;
    background-size: cover;
    width: auto;
    height: auto;
  }
  @media ${props => props.theme.desktop} {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 0;
    background-color: #e7d1bf;
    background-size: cover;
    width: auto;
    height: auto;
  }
`;

export default Rending;
