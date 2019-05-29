import React from 'react'
import App from '../App'
import { mount } from 'enzyme'
import { storeInstance } from '../store'
import { materialProfit, meltMaterials, newMaterial, SILVER } from '../components/machines/materials'
import { machineAt } from '../components/factory/factoryLib'
import { position } from '../components/machines/direction'
import { onFactoryPosition, onMachine, rotateOn, tickFactory, withMachine } from './helpper'
import { materialForStarter } from '../components/factory/actions'

describe('App', () => {
  let app
  beforeEach(() => {
    app = mount(<App />)
  })
  afterEach(() => {
    app.unmount()
  })
  describe('factory board', () => {
    beforeEach(() => {
      clearInterval(storeInstance.getState().factory.timer)
    })
    describe('with some machines in it', () => {
      beforeEach(() => {
        withMachine('.starter', '03', app)
        storeInstance.dispatch(materialForStarter(position(0, 3), newMaterial(SILVER)))
        withMachine('.furnace', '13', app)
        withMachine('.transporter', '23', app)
        rotateOn('23', '.transporter', app)
        withMachine('.transporter', '22', app)
        rotateOn('22', '.transporter', app)
        rotateOn('22', '.transporter', app)
        withMachine('.seller', '12', app)
      })
      const hasImageActive = machine => {
        expect(
          machine.find('img').html().includes('_active.svg')
        ).toBe(true)
      }
      test('after one tick ', () => {
        tickFactory()
        expect(
          machineAt(position(1, 3), state().factory).props
            .materials[0]
        ).toEqual(newMaterial(SILVER))
        onFactoryPosition(app, '03', position => {
          onMachine('.starter', hasImageActive, position)
        })
      })
      test('after two ticks ', () => {
        tickFactory()
        tickFactory()
        let state1 = storeInstance.getState();
        expect(
          machineAt(position(2, 3), state1.factory).props
            .materials[0]
        ).toEqual(newMaterial(SILVER))
        onFactoryPosition(app, '13', position => {
          onMachine('.furnace', hasImageActive, position)
        })
      })
      test('after three ticks ', () => {
        tickFactory()
        tickFactory()
        tickFactory()
        expect(
          machineAt(position(2, 2), storeInstance.getState().factory).props
            .materials[0]
        ).toEqual(meltMaterials([newMaterial(SILVER)])[0])
        onFactoryPosition(app, '23', position => {
          onMachine('.transporter', hasImageActive, position)
        })
      })
      test('after four ticks ', () => {
        tickFactory()
        tickFactory()
        tickFactory()
        tickFactory()
        expect(
          machineAt(position(1, 2), storeInstance.getState().factory).props
            .materials[0]
        ).toEqual(meltMaterials([newMaterial(SILVER)])[0])
        onFactoryPosition(app, '22', position => {
          onMachine('.transporter', hasImageActive, position)
        })
      })
      test('after five ticks ', () => {
        tickFactory()
        tickFactory()
        tickFactory()
        tickFactory()
        tickFactory()
        expect(storeInstance.getState().factory.totalSells).toBe(
          materialProfit(meltMaterials([newMaterial(SILVER)])[0])
        )
        onFactoryPosition(app, '12', position => {
          onMachine('.transporter', hasImageActive, position)
        })
      })
    })
  })
})

const state = () => {
  return storeInstance.getState()
}
