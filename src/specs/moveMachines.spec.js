import React from 'react'
import App from '../App'
import { mount } from 'enzyme'
import { machineAbsent, machinePresent, moveFromTo, onFactoryPosition, onMachine, withMachine } from "./helpper";

describe('App', () => {
  let app
  beforeEach(() => {
    app = mount(<App />)
  })
  afterEach(() => {
    app.unmount()
  })
  describe('Machines move', () => {
    describe('with a starter on 1,1 and a transporter on 1,2', () => {
      beforeEach(() => {
        withMachine('.starter', 11, app)
        withMachine('.transporter', 12, app)
      })
      describe('When clicked on the move button then on board position (1,1) and then on the position (1,3)', () => {
        test('move the starter', () => {
          moveFromTo(11, 13, '.starter', app)
          onFactoryPosition(app, 11, position =>
            onMachine('.starter', machineAbsent, position)
          )
          onFactoryPosition(app, 12, position =>
            onMachine('.transporter', machinePresent, position)
          )
          onFactoryPosition(app, 13, position =>
            onMachine('.starter', machinePresent, position)
          )
        })
      })
    })
  })
})
