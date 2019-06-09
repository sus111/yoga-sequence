import React from 'react';
import styled, { createGlobalStyle } from 'styled-components'
import { globalStyles } from './globalStyles';

import Card from './components/card/Card'

const Header = styled.h1`
  font-size: 32px;
`

const GlobalStyle = createGlobalStyle`
  ${globalStyles}
`;

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <Header>Yoga Sequence Creator</Header>
      <Card />
    </>
  );
}

export default App;
