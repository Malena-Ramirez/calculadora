import React from 'react'
import { DisplayContainer, DisplayText } from './styled-components/CalculatorStyled'

const Display = ( {textDisplay, altText} ) => {
  return (
    <DisplayContainer>
      <DisplayText id='display'>{(textDisplay?textDisplay:altText)||0}</DisplayText>
    </DisplayContainer>
  )
}

export default Display
