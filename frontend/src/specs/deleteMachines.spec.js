import React from 'react'
import App from '../App'
import { mount } from 'enzyme'
import {
  deleteOn,
  machineAbsent,
  machinePresent,
  onFactoryPosition,
  onMachine,
  withMachine
} from './helpper'
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
  describe('Machines deletion', () => {
    describe('with a starter on 1,1 and a transporter on 1,2', () => {
      beforeEach(() => {
        withMachine('.starter', 11, app)
        withMachine('.transporter', 12, app)
      })
      describe('When clicked on the deletion button and then on board position (1,1)', () => {
        test('only deletes the starter', () => {
          deleteOn(11, '.starter', app)
          onFactoryPosition(app, 11, position =>
            onMachine('.starter', machineAbsent, position)
          )
          onFactoryPosition(app, 12, position =>
            onMachine('.transporter', machinePresent, position)
          )
        })
      })
    })
  })
})
