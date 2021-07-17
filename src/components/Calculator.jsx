import React, { useState } from 'react';
import Display from './Display';
import NumberKeys from './NumberKeys';
import OperatorKeys from './OperatorKeys';
import { CalculatorContainer, Tittle, CalculatorMain, KeyContainer, NumberKeysContainer, OperatorKeysContainer, SpecialKey } from './styled-components/CalculatorStyled';
import { numbers, operators } from '../data';

const Calculator = () => {
  const [showDisplay, setShowDisplay] = useState('');
  const [ altText, setAltText] = useState('');
  const [operation, setOperation] = useState([]);
  
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
    setAltText('');
  }
  
  const handleReset = () =>{
    setShowDisplay('');
    setAltText('');
    setOperation([]);
  }

  const handleOperation = (e) =>{
    const { innerText } = e.target;

    if (!showDisplay && innerText === "-") {
      setShowDisplay(innerText);
    }

    let operationArray = operation;

    if (showDisplay) {
      operationArray = [...operation, showDisplay, innerText];
      setAltText(showDisplay);
      setShowDisplay('');    
    } else {
      if (altText && innerText !== "-") {
        operationArray = [...operation.slice(0,-1), innerText]
      }
    }
    
    setOperation(operationArray);
  }


  return (
    <CalculatorContainer>
      <CalculatorMain>
        <Tittle>Calculadora</Tittle>
        <Display 
          textDisplay={showDisplay} 
          altText={altText} 
        />

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
                onClick={handleOperation} 
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
