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
    // if (!isNaN(innerText)) {
    //   innerText = parseInt(innerText);
    // } 
    
    let textToDisplay;
    if (showDisplay) {
      if (showDisplay === '0') {
        if (innerText==='00' || innerText==='0') {
          textToDisplay = '0';
        } else{
          if (innerText==='.') {
            textToDisplay = showDisplay + innerText;
          } else {
            textToDisplay = innerText;
          }
        }
      } else {
        textToDisplay = showDisplay + innerText;
      }
    } else {
      if (innerText==='00'){
        textToDisplay = '';
      } else {
        if (innerText==='.') {
          textToDisplay = '0.'
        } else {
          textToDisplay = showDisplay + innerText;
        }
      }
    }
    setShowDisplay(textToDisplay);
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
            <SpecialKey id="clear">
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
