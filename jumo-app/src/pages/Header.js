import React, { useRef } from 'react';
import styled from 'styled-components';
// import axios from 'axios';
import { FiSearch } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import icon from '../images/JumoIcon.PNG';

const Header = ({ changeHandler, channel }) => {
  const searchText = useRef();

  const inputshow = () => {
    if (document.getElementById('input').style.visibility === 'visible') {
      searchText.current.value = '';
      document.getElementById('input').style.visibility = 'hidden';
    } else {
      document.getElementById('input').style.visibility = 'visible';
    }
  };

  return (
    <Navbar>
      <div className="Icon">
        <Link to="/">
          <img src={icon} alt="icon" width="55px" height="55px" />
        </Link>
      </div>
      <Searching>
        <Input
          id="input"
          type="text"
          placeholder="검색어를 입력하세요"
          outline="none"
          onChange={changeHandler}
          ref={searchText}
        />
        <Fi>
          <FiSearch size="24" color="#e7d1bf" onClick={inputshow} />
        </Fi>
      </Searching>
      <div>{channel}</div>
    </Navbar>
  );
};

const Fi = styled.div`
  display: none;
  @media ${props => props.theme.tablet} {
    display: flex;
  }
`;

const Navbar = styled.div`
  font-family: 'Sansation';
  display: flex;
  position: absolute;
  justify-content: space-between;
  align-items: center;
  padding: 30px 30px;
  color: white;
  background-color: #293848;
  width: 100%;
  height: 50px;
  z-index: 200;
`;
const Input = styled.input`
  visibility: visible;
  font-family: 'Nanum Gothic';
  background-color: #293848;
  color: #e7d1bf;
  border-top: none;
  border-right: none;
  border-left: none;
  border-bottom: 3px solid #e7d1bf;
  outline: none;
  width: 45vh;
  @media ${props => props.theme.tablet} {
    visibility: hidden;
    font-family: 'Nanum Gothic';
    background-color: #293848;
    color: #e7d1bf;
    border-top: none;
    border-right: none;
    border-left: none;
    border-bottom: 3px solid #e7d1bf;
    outline: none;
    width: 45vh;
    &:focus {
      background-color: #293848;
      border-top: none;
      border-right: none;
      border-left: none;
      outline: none;
    }
  }
`;
const Searching = styled.div`
  display: flex;
  @media ${props => props.theme.tablet} {
    display: flex;
    transform: translateX(15vw);
  }
  @media ${props => props.theme.desktop} {
    display: flex;
    transform: translateX(25vw);
  }
`;

export default Header;
