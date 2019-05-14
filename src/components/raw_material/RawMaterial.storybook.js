import React from 'react'
import { storiesOf } from '@storybook/react'
import { RawMaterial } from './RawMaterial'

const click = () => {
  alert('Clicked')
}

storiesOf('RawMaterial', module).add('A black material named holis', () => (
  <RawMaterial color="black" name="holis" onClick={click} />
))
