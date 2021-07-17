import React, { useState } from 'react';
import Display from './Display';
import NumberKeys from './NumberKeys';
import OperatorKeys from './OperatorKeys';
import { CalculatorContainer, Tittle, CalculatorMain, KeyContainer, NumberKeysContainer, OperatorKeysContainer, SpecialKey } from './styled-components/CalculatorStyled';
import { numbers, operators } from '../data';

const Calculator = () => {
  const [showDisplay, setShowDisplay] = useState('');
  
  const handleClick = e =>{
    const { innerText } = e.target;
    let textToDisplay= showDisplay + innerText;
    textToDisplay = Number(textToDisplay);
    if (isNaN(textToDisplay)) {
      textToDisplay = showDisplay ? showDisplay : "0.";
    } else {
      if (Number(showDisplay) % 1) {
        textToDisplay = showDisplay + innerText;
      } else {
        textToDisplay = (innerText === ".") ? (showDisplay + innerText) : textToDisplay.toString();
      }
    }
    setShowDisplay(textToDisplay);
  }
  
  const handleReset = () =>{
    setShowDisplay('');
  }

  return (
    <CalculatorContainer>
      <CalculatorMain>
        <Tittle>Calculadora</Tittle>
        <Display textDisplay={showDisplay} />

        <KeyContainer>
          <NumberKeysContainer>
            {numbers.map(number => (
              <NumberKeys 
                id={number.id} 
                number={number.number}
                onClick={handleClick} 
                key={number.id} />
            ))}
          </NumberKeysContainer>

          <OperatorKeysContainer>
            <SpecialKey id="clear" onClick={handleReset}>
              <span>AC</span>
            </SpecialKey>
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

              <SpecialKey id="equals">
                <span>=</span>
              </SpecialKey>

          
          </OperatorKeysContainer>

        </KeyContainer>
      </CalculatorMain>
    </CalculatorContainer>
  );
};

export default Calculator;
