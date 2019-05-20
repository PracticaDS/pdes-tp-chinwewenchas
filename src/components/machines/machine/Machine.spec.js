import { shallow } from 'enzyme/build'
import React from 'react'
import { south } from '../direction'
import { Machine } from './Machine'

describe('machine', () => {
  let defaultProps = {
    active: false,
    direction: south(),
    activeImg: 'lala',
    inactiveImg: 'lele'
  }

  describe('when is inactive', () => {
    let machine = shallow(<Machine {...defaultProps} />)

    it('shows inactive image', () => {
      expect(machine.props().src).toEqual(defaultProps.inactiveImg)
    })
  })
  describe('when is active', () => {
    let props = {
      ...defaultProps,
      active: true
    }
    let machine = shallow(<Machine {...props} />)

    it('shows active image', () => {
      expect(machine.props().src).toEqual(props.activeImg)
    })
  })
})
