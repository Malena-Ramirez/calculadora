import React, { useState } from 'react';
import Display from './Display';
import NumberKeys from './NumberKeys';
import OperatorKeys from './OperatorKeys';
import {
  CalculatorContainer,
  Tittle,
  CalculatorMain,
  KeyContainer,
  NumberKeysContainer,
  OperatorKeysContainer,
  SpecialKey,
} from './styled-components/CalculatorStyled';
import { numbers, operators } from '../data';
import { create, all } from 'mathjs';

const Calculator = () => {
  const [showDisplay, setShowDisplay] = useState('');
  const [altText, setAltText] = useState('');
  const [operation, setOperation] = useState([]);

  const handleClick = (e) => {
    if (showDisplay.length < 15) {
      const { innerText } = e.target;

      let textToDisplay = showDisplay + innerText; //1.0

      textToDisplay = Number(textToDisplay); //1

      if (isNaN(textToDisplay)) {
        textToDisplay = showDisplay || '0.';
      } else {
        if (Number(showDisplay) % 1) {
          textToDisplay = showDisplay + innerText;
        } else {
          textToDisplay =
            innerText === '.' || (innerText === '0' && showDisplay !== '0')
              ? showDisplay + innerText
              : textToDisplay.toString();
        }
      }

      setShowDisplay(textToDisplay);
      setAltText('');
    }
  };

  const handleReset = () => {
    setShowDisplay('');
    setAltText('');
    setOperation([]);
  };

  const handleOperation = (e) => {
    const { innerText } = e.target;

    let operationArray = operation;

    if (showDisplay) {
      operationArray = [...operation, showDisplay, innerText];
      setAltText(showDisplay);
      setShowDisplay('');
    } else {
      if (innerText === '-' && (operation.length > 0 || !altText)) {
        setShowDisplay(innerText);
      }
      if (altText) {
        if (innerText !== '-') {
          operationArray = [...operation.slice(0, -1), innerText];
        }

        if (operation.length === 0) {
          operationArray = [`${altText}`, innerText];
        }
      }
    }

    setOperation(operationArray);
  };

  const handleResult = () => {
    if (altText || operation.length > 0) {
      let operationExpression = altText
        ? [...operation.slice(0, -1)]
        : [...operation, showDisplay];

      if (operationExpression.length > 0) {
        const checkingItem = (array) => {
          let flag = true;
          let newArray = [];
          array.forEach((element) => {
            if (flag !== isNaN(element)) {
              flag = !flag;
              newArray = [...newArray, element];
            } else {
              newArray = [...newArray.slice(0, -1), element];
            }
          });
          return newArray;
        };

        operationExpression = checkingItem(operationExpression);

        operationExpression = operationExpression
          .map((element) => (element === 'x' ? '*' : element))
          .join('');

        const math = create(all);
        setAltText(math.evaluate(operationExpression));
      }
      setShowDisplay('');
      setOperation([]);
    }
  };
  return (
    <CalculatorContainer>
      <CalculatorMain>
        <Tittle>Calculadora</Tittle>
        <Display textDisplay={showDisplay} altText={altText} />

        <KeyContainer>
          <NumberKeysContainer>
            {numbers.map((number) => (
              <NumberKeys
                id={number.id}
                number={number.number}
                onClick={handleClick}
                key={number.id}
              />
            ))}
          </NumberKeysContainer>

          <OperatorKeysContainer>
            <SpecialKey id='clear' onClick={handleReset}>
              <span>AC</span>
            </SpecialKey>

            {operators.map((operator) => (
              <OperatorKeys
                id={operator.id}
                symbol={operator.symbol}
                onClick={handleOperation}
                key={operator.id}
              />
            ))}

            <SpecialKey id='equals' onClick={handleResult}>
              <span>=</span>
            </SpecialKey>
          </OperatorKeysContainer>
        </KeyContainer>
      </CalculatorMain>
    </CalculatorContainer>
  );
};

export default Calculator;
