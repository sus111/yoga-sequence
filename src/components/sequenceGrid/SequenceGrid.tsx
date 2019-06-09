import React from 'react';
import styled from 'styled-components'

import { colors } from '../../globalStyles';

import Card from '../card/Card'
import DownwardDog from '../../assets/icons/DownwardDog';

const Wrapper = styled.div`
  border: 1px solid ${colors.gorse};
  height: 300px;
  width: 100px;
`

const SequenceGrid: React.FC = () => {
  return (
    <Wrapper>
      <Card
        svg={DownwardDog}
        text="Downward Dog"
      />
    </Wrapper>
  );
}

export default SequenceGrid;
