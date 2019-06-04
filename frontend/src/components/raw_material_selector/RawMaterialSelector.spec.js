import { RawMaterialSelector } from './RawMaterialSelector'
import React from 'react'
import { shallow } from 'enzyme'
import rawMaterialSelectorReducer from './reducer'
import { open } from './actions'

describe('raw material selector component', function () {
  describe('when click any child', function () {
    it('it call the rawMaterialSelected with the starter position', function () {
      let expectedPosition = { y: 1, x: 1 }
      let actualPosition
      const rawMaterialSelected = position => {
        actualPosition = position
      }
      let rawMaterialSelector = shallow(
        <RawMaterialSelector
          starterPosition={expectedPosition}
          rawMaterialSelected={rawMaterialSelected}
        />
      )

      rawMaterialSelector
        .find('RawMaterial.raw-material-selector-item')
        .first()
        .simulate('click')
      expect(actualPosition).toBe(expectedPosition)
    })
  })
})
describe('raw material selector reducer', () => {
  let state = {}
  describe('when receive an open action', () => {
    it('should set the selected key with the action starter position', () => {
      const expectedPosition = 'the position'
      expect(
        rawMaterialSelectorReducer(state, open(expectedPosition)).selected
      ).toEqual(expectedPosition)
    })
  })
  describe('when receive other action', () => {
    it('should not change the state', () => {
      expect(rawMaterialSelectorReducer(state, { type: 'lalala' })).toBe(state)
    })
  })
})
