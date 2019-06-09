import React from 'react';
import styled from 'styled-components'

import { colors } from '../../globalStyles';

interface CardProps {
  svg: any
  text: string
}

const Wrapper = styled.div`
  align-items: center;
  border: 1px solid ${colors.grayChateau};
  display: flex;
  flex-direction: column;
`

const Caption = styled.p`
  margin-bottom: 12px;
`

const Card: React.FC<CardProps> = ({
  svg: SVG, text
}) => {
  return (
    <Wrapper>
      <SVG />
      <Caption>{text}</Caption>
    </Wrapper>
  );
}

export default Card;
