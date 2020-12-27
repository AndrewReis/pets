import styled from 'styled-components';

export const Container = styled.nav`
  width: 100%;
  height: 70px;
  background-color: #57419D;
  box-shadow: 1px -3px 3px 1px #9999C7;
  display: flex;
    ul {
      width: 50%;
      list-style: none;
      display: flex;
      align-items: center;
      justify-content: center;

        li {
          width: 70px;
          height: 32px;
          border-radius: 10px;
          box-shadow: 2px 2px 2px #9999C7;
          margin-left: 20px;
          background-color: #fff;
          text-align: center;
          color: #9999C7;
          font-weight: bold;
        }
    }
`;