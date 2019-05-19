import { shallow } from 'enzyme/build'
import React from 'react'
import { Starter } from './Starter'
import { south } from '../direction'

describe('starter', () => {
  let defaultProps = {
    active: false,
    onClick: () => {},
    position: { x: 1, y: 1 },
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
})
