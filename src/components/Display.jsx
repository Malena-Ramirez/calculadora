import React from 'react'
import { DisplayContainer, DisplayText } from './styled-components/CalculatorStyled'

const Display = ( {textDisplay} ) => {
  return (
    <DisplayContainer>
      <DisplayText id='display'>{textDisplay}</DisplayText>
    </DisplayContainer>
  )
}

export default Display
