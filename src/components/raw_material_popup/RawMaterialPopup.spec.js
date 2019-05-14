import { RawMaterialPopup } from './RawMaterialPopup'
import React from 'react'
import { mount } from 'enzyme'
import { toggleRawMaterialPopup } from './actions'
import rawMaterialPopUpReducer from './reducer'
import { TestProvider } from '../tests_helpers/TestProvider'

describe('the raw material popup', () => {
  describe('when is vissible', function () {
    let rawMaterialPopUp = mount(
      <TestProvider>
        <RawMaterialPopup visible />
      </TestProvider>
    )

    it('should show the popup', function () {
      expect(rawMaterialPopUp.find('div.raw-material-popup').length).toBe(1)
    })
  })

  describe('when is not visible', function () {
    let rawMaterialPopUp = mount(<RawMaterialPopup />)

    it('should show the popup', function () {
      expect(rawMaterialPopUp.find('div.raw-material-popup').length).toBe(0)
    })
  })
})

describe('the raw material popup reducer', function () {
  let state = { visible: false }
  describe('when receive the open action', function () {
    it('toggle de open prop', function () {
      expect(
        rawMaterialPopUpReducer(state, toggleRawMaterialPopup()).visible
      ).toBe(true)
    })
  })
  describe('when receive other action', function () {
    it('not change the state', function () {
      expect(rawMaterialPopUpReducer(state, { type: 'lelelele' })).toBe(state)
    })
  })
})
