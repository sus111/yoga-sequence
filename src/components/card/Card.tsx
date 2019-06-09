import React from 'react';
import styled from 'styled-components'

import { colors } from '../../globalStyles';

const Wrapper = styled.div`
  border: 1px solid ${colors.gorse};
  height: 300px;
  width: 100px;
`

interface CardProps {
  svg: any
  text: string
}

const Card: React.FC<CardProps> = ({
  svg: SVG, text
}) => {
  return (
    <Wrapper>
      <SVG />
      {text}
    </Wrapper>
  );
}

export default Card;
