import React from 'react';
import styled from 'styled-components'

const Wrapper = styled.div`
  background: LightCyan;
  height: 300px;
  width: 100px;
`

const Card: React.FC = () => {
  return (
    <Wrapper>
      card
    </Wrapper>
  );
}

export default Card;
