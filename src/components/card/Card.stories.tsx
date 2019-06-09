import * as React from 'react'
import { storiesOf } from '@storybook/react'

import DownwardDog from '../../assets/icons/DownwardDog';
import Card from "./Card"

storiesOf("Card", module)
  .add("with text", () => (
    <Card svg={DownwardDog} text="Downward Dog" />
  ))
