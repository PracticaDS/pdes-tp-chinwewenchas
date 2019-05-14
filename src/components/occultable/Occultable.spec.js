import { shallow } from 'enzyme'
import React from 'react'
import { Occultable } from './Occultable'

describe('occultable component', () => {
  let children = 'HOLIS'

  describe('when is visible', () => {
    it('shows the children', () => {
      const occultable = shallow(<Occultable visible> {children} </Occultable>)
      expect(occultable.contains(children)).toBe(true)
    })
  })

  describe('when is not visible', () => {
    it('does not show it children', () => {
      const occultable = shallow(<Occultable> {children} </Occultable>)
      expect(occultable.contains(children)).toBe(false)
    })
  })
})
