import React from 'react';
import Display from './Display';
import NumberKeys from './NumberKeys';
import OperatorKeys from './OperatorKeys';


const Calculator = () => {
  return (
    <div>
      <h1>Calculadora</h1>
      <Display/>
      <NumberKeys/>
      <OperatorKeys/>
    </div>
  )
}

export default Calculator
