import { MachineCreator } from './MachineCreator'
import {
  FURNACE_MACHINE,
  SELLER_MACHINE,
  STARTER_MACHINE,
  TRANSPORTER_MACHINE
} from '../machines'
import React from 'react'
import { mount } from 'enzyme'
import { TestProvider } from '../../tests_helpers/TestProvider'
import { south, position } from '../direction'

describe('machineCreator component', () => {
  describe('when machineCreator type is starter', () => {
    it('render the starter machineCreator', function () {
      let machineToRender = {
        type: STARTER_MACHINE,
        props: {
          direction: south(),
          position: position(1, 1)
        }
      }
      let machine = mount(
        <TestProvider>
          <MachineCreator machine={machineToRender} />
        </TestProvider>
      )
      expect(machine.exists('.starter')).toBe(true)
    })
  })
  describe('when machineCreator type is transporter', () => {
    it('render the transporter machine', function () {
      let machineToRender = {
        type: TRANSPORTER_MACHINE,
        props: {
          direction: south(),
          position: position(1, 1)
        }
      }
      let machine = mount(
        <TestProvider>
          <MachineCreator machine={machineToRender} />
        </TestProvider>
      )
      expect(machine.exists('.transporter')).toBe(true)
    })
  })
  describe('when machine type is furnace', () => {
    it('render the furnace machine', function () {
      let machineToRender = {
        type: FURNACE_MACHINE,
        props: {
          direction: south(),
          position: position(1, 1)
        }
      }
      let machine = mount(
        <TestProvider>
          <MachineCreator machine={machineToRender} />
        </TestProvider>
      )
      expect(machine.exists('.furnace')).toBe(true)
    })
  })
  describe('when machine type is seller', () => {
    it('render the seller machine', function () {
      let machineToRender = {
        type: SELLER_MACHINE,
        props: {
          direction: south(),
          position: position(1, 1)
        }
      }
      let machine = mount(
        <TestProvider>
          <MachineCreator machine={machineToRender} />
        </TestProvider>
      )
      expect(machine.exists('.seller')).toBe(true)
    })
  })
  describe('when machineCreator type any other', () => {
    it('render the none machineCreator', function () {
      let machineToRender = {
        type: 'lalala',
        props: {
          position: position(1, 1)
        }
      }
      let machine = mount(
        <TestProvider>
          <MachineCreator machine={machineToRender} />
        </TestProvider>
      )
      expect(machine.exists('.none_machine')).toBe(true)
    })
  })
})
