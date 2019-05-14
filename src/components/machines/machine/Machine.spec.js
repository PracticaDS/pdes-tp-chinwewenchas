import { Machine } from './Machine'
import { STARTER_MACHINE } from '../machines'
import React from 'react'
import { mount } from 'enzyme'
import { TestProvider } from '../../tests_helpers/TestProvider'
import { south } from '../direction'

describe('machine component', () => {
  describe('when machine type is starter', () => {
    it('render the starter machine', function () {
      let machineToRender = {
        type: STARTER_MACHINE,
        props: { direction: south() }
      }
      let machine = mount(
        <TestProvider>
          <Machine machine={machineToRender} />
        </TestProvider>
      )
      expect(machine.exists('.starter')).toBe(true)
    })
  })

  describe('when machine type any other', () => {
    it('render the none machine', function () {
      let machineToRender = { type: 'lalala', props: {} }
      let machine = mount(
        <TestProvider>
          <Machine machine={machineToRender} />
        </TestProvider>
      )
      expect(machine.exists('.none-machine')).toBe(true)
    })
  })
})
