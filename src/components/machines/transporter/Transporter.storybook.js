import React from 'react'
import { storiesOf } from '@storybook/react'
import { Transporter } from './Transporter'
import { east, north, south, west } from '../direction'

storiesOf('Transporter', module)
  .add('North', () => <Transporter direction={north()} />)
  .add('South', () => <Transporter direction={south()} />)
  .add('East', () => <Transporter direction={west()} />)
  .add('West', () => <Transporter direction={east()} />)
