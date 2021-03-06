import React from 'react'
import App from '../App'
import { mount } from 'enzyme'
import { onFactoryPosition, onMachine, rotateOn, withMachine } from './helpper'
import { storeInstance } from '../store'
import { enteredUserChange, signInAction } from '../components/sign_in/actions'
import { factorySelected } from '../components/factory/actions'
import { createFactoryBoard } from '../components/factory/factoryLib'

describe('App', () => {
  let app
  beforeEach(() => {
    app = mount(<App />)
    storeInstance.dispatch(enteredUserChange('yo'))
    storeInstance.dispatch(signInAction())
    storeInstance.dispatch(
      factorySelected({ name: 'lala', id: 10, board: createFactoryBoard(10) })
    )
    app = app.update()
  })
  afterEach(() => {
    app.unmount()
  })
  describe('Machines rotation', () => {
    describe('with a starter on 1,1 and a transporter on 1,2', () => {
      beforeEach(() => {
        withMachine('.starter', 11, app)
        withMachine('.transporter', 12, app)
      })
      describe('When clicked on the rotate button and then on board position (1,1)', () => {
        const machineRotates = machine => {
          expect(machine.find('img').props().style.transform).toEqual(
            'rotate(0.25turn)'
          )
        }
        const machineNotRotates = machine => {
          expect(machine.find('img').props().style.transform).toEqual(
            'rotate(0turn)'
          )
        }
        test('only rotates the starter', () => {
          rotateOn(11, '.starter', app)
          onFactoryPosition(app, 11, position =>
            onMachine('.starter', machineRotates, position)
          )
          onFactoryPosition(app, 12, position =>
            onMachine('.transporter', machineNotRotates, position)
          )
        })
      })
    })
  })
})
