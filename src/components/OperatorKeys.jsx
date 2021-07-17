import React from 'react';
import { OperatorKeyContainer } from './styled-components/CalculatorStyled';

const OperatorKeys = ({id, symbol, onClick}) => {
  return (
    <OperatorKeyContainer id={id} onClick={onClick}>
      <span>{symbol}</span>
    </OperatorKeyContainer>
  )
}

export default OperatorKeys
