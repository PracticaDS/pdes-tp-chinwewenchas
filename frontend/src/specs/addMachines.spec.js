import React from 'react'
import App from '../App'
import { mount } from 'enzyme'
import { click, onFactoryPosition, onMachine, onToolbox } from './helpper'
import { storeInstance } from '../store'
import { enteredUserChange, signInAction } from '../components/sign_in/actions'

describe('App', () => {
  let app
  beforeEach(() => {
    app = mount(<App />)
    storeInstance.dispatch(enteredUserChange('yo'))
    storeInstance.dispatch(signInAction())
    app = app.update()
  })

  afterEach(() => {
    app.unmount()
  })

  describe('Machines addition', () => {
    describe('When clicked on Starter button and then on board position (1,1)', () => {
      test('creates a Starter machine at (1,1) on the board', () => {
        onToolbox(app, toolbox => onMachine('.starter', click, toolbox))
        onFactoryPosition(app, 11, position =>
          onMachine('.none_machine', click, position)
        )

        const assert = starter => {
          expect(starter.length).toBe(1)
        }
        onFactoryPosition(app, 11, position =>
          onMachine('.starter', assert, position)
        )
      })
    })
    describe('When clicked on Transporter button and then on board position (2,1)', () => {
      test('creates a Transporter machine at (2,1) on the board', () => {
        onToolbox(app, toolbox => onMachine('.transporter', click, toolbox))
        onFactoryPosition(app, 21, position =>
          onMachine('.none_machine', click, position)
        )

        const assert = transporter => {
          expect(transporter.length).toBe(1)
        }
        onFactoryPosition(app, 21, position =>
          onMachine('.transporter', assert, position)
        )
      })
    })
    describe('When clicked on Seller button and then on board position (3,1)', () => {
      test('creates a Seller machine at (3,1) on the board', () => {
        onToolbox(app, toolbox => onMachine('.seller', click, toolbox))
        onFactoryPosition(app, 31, position =>
          onMachine('.none_machine', click, position)
        )

        const assert = seller => {
          expect(seller.length).toBe(1)
        }
        onFactoryPosition(app, 31, position =>
          onMachine('.seller', assert, position)
        )
      })
    })
    describe('When clicked on Furnace button and then on board position (4,1)', () => {
      test('creates a Furnace machine at (4,1) on the board', () => {
        onToolbox(app, toolbox => onMachine('.furnace', click, toolbox))
        onFactoryPosition(app, 41, position =>
          onMachine('.none_machine', click, position)
        )

        const assert = furnace => {
          expect(furnace.length).toBe(1)
        }
        onFactoryPosition(app, 41, position =>
          onMachine('.furnace', assert, position)
        )
      })
    })
    describe('When clicked on Crafter button and then on board position (5,1)', () => {
      test('creates a Crafter machine at (4,4) on the board', () => {
        onToolbox(app, toolbox => onMachine('.crafter', click, toolbox))
        onFactoryPosition(app, 44, position =>
          onMachine('.none_machine', click, position)
        )

        const assert = crafter => {
          expect(crafter.length).toBe(1)
        }
        onFactoryPosition(app, 44, position =>
          onMachine('.crafter', assert, position)
        )
      })
    })
  })
})
