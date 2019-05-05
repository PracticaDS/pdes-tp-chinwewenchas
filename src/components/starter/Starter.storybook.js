import React from 'react'
import { storiesOf } from '@storybook/react'

import { Starter } from './Starter'

const click = () => {
  alert('Started clicked')
}

storiesOf('Starter', module)
  .add('Inactive', () => (
    <div style={{ width: '100px' }}>
      <Starter starterClick={click} />
    </div>
  ))
  .add('Active', () => (
    <div style={{ width: '100px' }}>
      <Starter active starterClick={click} />
    </div>
  ))
