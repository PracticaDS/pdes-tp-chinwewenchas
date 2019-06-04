import React from 'react'
import { storiesOf } from '@storybook/react'
import { Seller } from './Seller'
import { south } from '../direction'

storiesOf('Seller', module).add('Normal', () => <Seller direction={south()} />)
