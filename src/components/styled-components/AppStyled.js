import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    background: linear-gradient(300deg, rgba(2,128,144,1) 0%, rgba(0,168,150,1) 50%, rgba(153,217,140,1) 100%);
    font-family: 'Comfortaa', cursive;
    /* font-family: 'ZCOOL QingKe HuangYou', cursive; */
  }
`;

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100vw;
  height: 100vh;
  box-sizing: border-box;
  padding: 15px;
`;