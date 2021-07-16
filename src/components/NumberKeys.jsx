import React from 'react';
import { NumberKeyContainer, Number } from './styled-components/CalculatorStyled';

const NumberKeys = ({id, number, onClick}) => {

  return (
    <NumberKeyContainer id={id} onClick={onClick}>
      <Number>{number}</Number>
    </NumberKeyContainer>
  )
}

export default NumberKeys
