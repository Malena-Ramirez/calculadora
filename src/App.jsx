import React from 'react';
import Calculator from './components/Calculator';
import Footer from './components/Footer';
import { GlobalStyle, AppContainer } from './components/styled-components/AppStyled';

function App() {
  return (
    <AppContainer>
      <GlobalStyle/>
      <Calculator />
      <Footer />
    </AppContainer>
  );
}

export default App;
