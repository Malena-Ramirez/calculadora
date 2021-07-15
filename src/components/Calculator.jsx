import React from 'react';
import Display from './Display';
import NumberKeys from './NumberKeys';
import OperatorKeys from './OperatorKeys';
import { CalculatorContainer, Tittle, CalculatorMain, KeyContainer, NumberKeysContainer, OperatorKeysContainer } from './styled-components/CalculatorStyled';
import { numbers, operators } from '../data';

const Calculator = () => {
  return (
    <CalculatorContainer>
      <CalculatorMain>
        <Tittle>Calculadora</Tittle>
        <Display />
        <KeyContainer>

          <NumberKeysContainer>
            {numbers.map(number => (
              <NumberKeys id={number.id} number={number.number} key={number.id} />
            ))}
          </NumberKeysContainer>
          
          <OperatorKeysContainer>
          {
            operators.map(operator =>(
              <OperatorKeys 
                id={operator.id} 
                symbol={operator.symbol} 
                special={operator.special}
                bg={operator.bg} 
                key={operator.id} />
            ))
          }
          </OperatorKeysContainer>

        </KeyContainer>
      </CalculatorMain>
    </CalculatorContainer>
  );
};

export default Calculator;
