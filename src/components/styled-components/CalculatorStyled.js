import styled from 'styled-components';

export const CalculatorContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CalculatorMain = styled.div`
  padding: 10px;
  background-color: #313b3a;
  width: 50vw;
  min-width: 280px;
  max-width: 515px;
  height: 50vh;
`;

export const Tittle = styled.h1`
  display: none;
`;

export const DisplayContainer = styled.div`
  padding: 5px 10px;
  background-color: beige;
  background-color: #2f2b2b;
  color: white;
  height: 31px;
`;

export const DisplayText = styled.p`
  font-family: 'ZCOOL QingKe HuangYou', cursive;
  font-size: 30px;
  margin: 0;
  text-align: right;
`;

export const KeyContainer = styled.div`
  display: flex;
  align-content: center;
  height: 82%;
  padding: 20px 0;
`;

export const NumberKeysContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3,1fr);
  gap: 5px;
  margin-right: 5px;
  width: 67%;
  @media (min-width: 768px) {
    gap: 10px;
    margin-right: 10px;
  }
`;

export const NumberKeyContainer = styled.div`
  display:flex;
  align-items:center;
  justify-content:center;
  border:1px solid black;
  border-radius:5px;
  background-color: #c9c3c3;
  cursor: pointer;
  &:hover {
    background-color: #8b8a8a;
  }
  &:active {
    transform: translateY(2px);
  }
`;

export const Number = styled.span`
  font-size: 1.5rem;
  font-weight:500;
`;

export const OperatorKeysContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2,1fr);
  gap: 5px;
  width: 33%;
  font-weight:600;
  font-size: 1.5rem;
  @media (min-width: 768px) {
    gap: 10px;
  }
`;

export const SpecialKey = styled.div`
  display:flex;
  align-items:center;
  justify-content:center;
  border:1px solid black;
  border-radius:5px;
  cursor: pointer;
  grid-column: 1 / 3;
  background-color: ${props=>props.id === "clear" ? "#d3787f" : "#95d88c" } ;
  &:hover {
    opacity:0.5;
  }
  &:active {
    transform: translateY(2px);
  }
`;

export const OperatorKeyContainer = styled.div`
  display:flex;
  align-items:center;
  justify-content:center;
  border:1px solid black;
  border-radius:5px;
  background-color: #c9c3c3;
  cursor: pointer;
  grid-column:${props=>props.special? "1 / 3": "auto"};
  background-color:${props=>props.bg};
  &:hover {
    opacity:0.5;
  }
  &:active {
    transform: translateY(2px);
  }
`;


