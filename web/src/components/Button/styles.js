import styled, { css } from 'styled-components';

export const Container = styled.button`
  width: 325px;
  height: 46px;
  background-color: #57419D;
  color: #fff;
  font-size: 20px;
  font-weight: bold;
  border: 0;
  border-radius: 10px;
  cursor: pointer;
  margin-top: 28px;
  transition: filter 0.3s;


  &:hover {
    filter: brightness(90%);
  }



`;