import React from 'react';
import Display from './Display';
import NumberKeys from './NumberKeys';
import OperatorKeys from './OperatorKeys';
import { CalculatorContainer, Tittle, CalculatorMain, KeyContainer } from './styled-components/CalculatorStyled';
import { numbers } from '../data';

const Calculator = () => {
  return (
    <CalculatorContainer>
      <CalculatorMain>
        <Tittle>Calculadora</Tittle>
        <Display />
        <KeyContainer>
          {numbers.map((number) => (
            <NumberKeys id={number.id} number={number.number} key={number.id} />
          ))}
          <OperatorKeys />
        </KeyContainer>
      </CalculatorMain>
    </CalculatorContainer>
  );
};

export default Calculator;
