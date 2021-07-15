import styled from 'styled-components';

export const CalculatorContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CalculatorMain = styled.div`
  border: 3px solid black;
  padding: 10px;
  background-color: blue;
  width: 30vw;
  min-width: 280px;
  height: 55vh;
`;

export const Tittle = styled.h1`
  display: none;
`;

export const DisplayContainer = styled.div`
  border: 2px solid black;
  padding: 5px 10px;
  background-color: beige;
`;

export const DisplayText = styled.span`
  font-family: 'ZCOOL QingKe HuangYou', cursive;
  font-size: 30px;
`;

export const KeyContainer = styled.div`
  display: flex;
`;

