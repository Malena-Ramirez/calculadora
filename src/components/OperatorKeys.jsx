import React from 'react';
import { OperatorKeyContainer } from './styled-components/CalculatorStyled';

const OperatorKeys = ({id, symbol, special, bg}) => {
  return (
    <OperatorKeyContainer id={id} special={special} bg={bg}>
      <span>{symbol}</span>
    </OperatorKeyContainer>
  )
}

export default OperatorKeys
