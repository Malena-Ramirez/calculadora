import React from 'react'
import { DisplayContainer, DisplayText } from './styled-components/CalculatorStyled'

const Display = () => {
  return (
    <DisplayContainer>
      <DisplayText id='display'>23678+8-5</DisplayText>
    </DisplayContainer>
  )
}

export default Display
