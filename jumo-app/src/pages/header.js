import React from 'react';
import styled from 'styled-components';
import icon from '../images/JumoIcon.PNG';

const Navbar = styled.div`
  display: flex;
  position: absolute;
  justify-content: space-between;
  align-items: center;
  padding: 5px;
  color: white;
  background-color: #293848;
  width: 99.2%;
  height: 50px;
`;
const Input = styled.input`
  background-color: #293848;
  color: #e7d1bf;
  border-top: none;
  border-right: none;
  border-left: none;
  border-bottom: 3px solid #e7d1bf;
  outline: none;
  width: 30vh;

  &:focus {
    background-color: #293848;
    border-top: none;
    border-right: none;
    border-left: none;
    outline: none;
  }
`;

function Nav() {
  return (
    <Navbar>
      <div className="Icon">
        <img src={icon} alt="icon" width="55px" height="55px" />
      </div>
      <div className="searching">
        <Input type="text" placeholder="검색어를 입력하세요" outline="none" />
      </div>
      <div>Mypage</div>
    </Navbar>
  );
}
export default Nav;