import React from 'react'
import { storiesOf } from '@storybook/react'

import { Starter } from './Starter'
import { position } from '../direction'

const click = () => {
  alert('Started clicked')
}

storiesOf('Starter', module)
  .add('Inactive', () => (
    <div style={{ width: '100px' }}>
      <Starter direction={position(1, 1)} starterClick={click} />
    </div>
  ))
  .add('Active', () => (
    <div style={{ width: '100px' }}>
      <Starter active direction={position(1, 1)} starterClick={click} />
    </div>
  ))
