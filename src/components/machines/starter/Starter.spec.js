import { shallow } from 'enzyme/build'
import React from 'react'
import { Starter } from './Starter'
import { south } from '../direction'

describe('starter', () => {
  let defaultProps = {
    active: false,
    onClick: () => {},
    id: { x: 1, y: 1 },
    direction: south()
  }

  it('do click when click on it', () => {
    let executed = false
    let myProps = {
      ...defaultProps,
      onClick: () => {
        executed = true
      }
    }
    const starter = shallow(<Starter {...myProps} />)

    starter.find('div.starter').simulate('click')
    expect(executed).toBe(true)
  })

  describe('when is inactive', () => {
    let starter = shallow(<Starter {...defaultProps} />)

    it('shows inactive image', () => {
      expect(starter.find('img').props().src).toEqual('/icons/starter.svg')
    })
  })
  describe('when is active', () => {
    let props = {
      ...defaultProps,
      active: true
    }
    let starter = shallow(<Starter {...props} />)

    it('shows active image', () => {
      expect(starter.find('img').props().src).toEqual(
        '/icons/starter_active.svg'
      )
    })
  })
})
