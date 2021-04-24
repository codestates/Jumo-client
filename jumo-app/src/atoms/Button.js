/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  display: inline-flex;
  outline: none;
  border: none;
  border-radius: 4px;
  color: white;
  font-weight: bold;
  cursor: pointer;
  padding: 0.5rem;

  font-size: 1rem;
  text-align: center;
  vertical-align: middle;

  background: #c29b86;
  &:hover {
    background: #e7d1bf;
  }
  &:active {
    background: rgba(194, 155, 134, 0.4);
  }

  /* 기타 */
  & + & {
    margin-left: 1rem;
  }
`;

function Button({ children, ...rest }) {
  return <StyledButton {...rest}>{children}</StyledButton>;
}

export default Button;
