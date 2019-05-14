import { RawMaterialSelector } from './RawMaterialSelector'
import React from 'react'
import { shallow } from 'enzyme'
import rawMaterialSelectorReducer from './reducer'
import { open } from './actions'

describe('raw material selector component', function () {
  describe('when click any child', function () {
    it('it call the rawMaterialSelected with the starterId', function () {
      let expectedId = { y: 1, x: 1 }
      let actualId
      const rawMaterialSelected = id => {
        actualId = id
      }
      let rawMaterialSelector = shallow(
        <RawMaterialSelector
          starterId={expectedId}
          rawMaterialSelected={rawMaterialSelected}
        />
      )

      rawMaterialSelector
        .find('RawMaterial.raw-material-selector-item')
        .first()
        .simulate('click')
      expect(actualId).toBe(expectedId)
    })
  })
})
describe('raw material selector reducer', () => {
  let state = {}
  describe('when receive an open action', () => {
    it('should change the set the selected key with the action starterId', () => {
      const expectedId = 'the id'
      expect(rawMaterialSelectorReducer(state, open(expectedId)).selected).toBe(
        expectedId
      )
    })
  })
  describe('when receive other action', () => {
    it('should not change the state', () => {
      expect(rawMaterialSelectorReducer(state, { type: 'lalala' })).toBe(state)
    })
  })
})
