import React from 'react';
import styled from 'styled-components'

import Card from '../card/Card'
import DownwardDog from '../../assets/icons/DownwardDog';
import WarriorOne from '../../assets/icons/WarriorOne';

const Wrapper = styled.div`
  background: transparent;
  display: grid;
  grid-template: repeat(4, 25%)/repeat(4, 25%);
  height: 100%;
  padding: 0 32px;
  width: 70%;
`

const positions = [
  {
    title: 'Downward Dog',
    file: DownwardDog,
  },
  {
    title: 'Warrior One',
    file: WarriorOne,
  },
  {
    title: 'Downward Dog',
    file: DownwardDog,
  },
  {
    title: 'Warrior One',
    file: WarriorOne,
  },
  {
    title: 'Downward Dog',
    file: DownwardDog,
  },
  {
    title: 'Warrior One',
    file: WarriorOne,
  },
  {
    title: 'Downward Dog',
    file: DownwardDog,
  },
  {
    title: 'Warrior One',
    file: WarriorOne,
  }
]

const SequenceGrid: React.FC = (className) => {
  return (
    <Wrapper>
      {
        positions.map(position => (
          <Card
            svg={position.file}
            text={position.title}
        />
        ))
      }
    </Wrapper>
  );
}

export default SequenceGrid;
