import { shallow } from 'enzyme/build'
import React from 'react'
import { Starter } from './Starter'
import { south } from '../direction'

describe('starter', () => {
  let defaultProps = {
    active: false,
    selectRawMaterial: () => {},
    selectPosition: () => {},
    actionSelected: undefined,
    position: { x: 1, y: 1 },
    direction: south()
  }

  describe('when click on it', () => {
    let executedRawMaterial
    let executedSelectPosition
    let myProps

    beforeEach(() => {
      executedRawMaterial = false
      executedSelectPosition = false
      myProps = {
        ...defaultProps,
        selectRawMaterial: () => {
          executedRawMaterial = true
        },
        selectPosition: () => {
          executedSelectPosition = true
        }
      }
    })
    describe('when the actionSelected is not defined', () => {
      it('only executes the selectRawMaterial', function () {
        myProps.actionSelected = undefined
        const starter = shallow(<Starter {...myProps} />)

        starter.find('div.starter').simulate('click')
        expect(executedRawMaterial).toBe(true)
        expect(executedSelectPosition).toBe(false)
      })
    })
    describe('when the actionSelected is defined', () => {
      it('only executes the selectPosition', function () {
        myProps.actionSelected = 'lala'
        const starter = shallow(<Starter {...myProps} />)

        starter.find('div.starter').simulate('click')
        expect(executedRawMaterial).toBe(false)
        expect(executedSelectPosition).toBe(true)
      })
    })
  })
})
