import React from 'react';
import styled, { createGlobalStyle } from 'styled-components'
import { colors, globalStyles } from './globalStyles';

import SequenceGrid from './components/sequenceGrid/SequenceGrid'

const Header = styled.h1`
  color: ${colors.shark};
  font-size: 32px;
  font-weight: bold;
`

const GlobalStyle = createGlobalStyle`
  ${globalStyles}
`;

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <Header>Yoga Sequence Creator</Header>
      <SequenceGrid />
    </>
  );
}

export default App;
