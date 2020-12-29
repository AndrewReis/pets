import styled from 'styled-components';

import logo from '../../assets/header.svg'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url(${logo});
  background-size: cover;
  position: relative;

  > a {
    position: absolute;
    top: 30px;
    left: 30px;
    display: flex;
    align-items: center;
    color: #fff;
    font-size: 20px;
    font-weight: 300;
    z-index: 2; 

    transition: color 0.2s;

    &:hover{
      color: #9999C7
    }

    svg {
      margin-right: 10px;
    }
  }

    form {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      position: absolute;
      overflow: hidden;
      background-color: rgba(0, 0, 0, 0.4);

        input {
          width: 360px;
          height: 42px;
          padding: 15px;
          margin-bottom: 8px;
          border-radius: 10px;
          outline: 0;
          border: 0;
          background-color: #57419D;
          color: #ddd;
          font-size: 16px;
          transition: filter 0.3s;

          &:hover{
            filter: brightness(90%);  
          }

          &::placeholder {
            color: #9999C7;
            font-size: 16px;
          }

        }

        textarea {
          width: 360px;
          height: 100px;
          padding: 15px;
          margin-bottom: 8px;
          border-radius: 10px;
          outline: 0;
          border: 0;
          background-color: #57419D;
          color: #ddd;
          font-size: 16px;
          transition: filter 0.3s;


          &::placeholder {
            color: #9999C7;
            font-size: 16px;
          }

        }

        button {
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

        }

    }
`;

