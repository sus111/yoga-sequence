import * as React from 'react'
import { storiesOf } from '@storybook/react'

import Card from "./Card"

storiesOf("Card", module)
  .add("with text", () => (
    <Card>Hello Card</Card>
  ))
