import React from 'react';
import { NumberKeyContainer, Number } from './styled-components/CalculatorStyled';

const NumberKeys = ({id, number}) => {

  return (
    <NumberKeyContainer id={id}>
      <Number>{number}</Number>
    </NumberKeyContainer>
  )
}

export default NumberKeys
