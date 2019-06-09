import React from 'react';
import styled, { createGlobalStyle } from 'styled-components'
import { colors, globalStyles } from './globalStyles';

import SequenceGrid from './components/sequenceGrid/SequenceGrid'

const GlobalStyle = createGlobalStyle`
  ${globalStyles}
`;

const OuterWrapper = styled.div`
  height: 100vh;
`

const Header = styled.h1`
  color: ${colors.shark};
  font-size: 32px;
  font-weight: bold;
  margin: 32px;
`
const Wrapper = styled.div`
  display: flex;
  height: 100%;
`

const SequenceGridStyled = styled(SequenceGrid)`
  height: 100%;
`

const App: React.FC = () => {
  return (
    <OuterWrapper>
      <GlobalStyle />
      <Header>Yoga Sequence Creator</Header>
      <Wrapper>
        <SequenceGridStyled />
        SelectionGrid
      </Wrapper>
    </OuterWrapper>
  );
}

export default App;
