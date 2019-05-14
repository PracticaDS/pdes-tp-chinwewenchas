import { mount } from 'enzyme'
import React from 'react'
import { Square } from './Square'

describe('squares', () => {
  it('deberia estar vacío al crearse', () => {
    const square = mount(<Square />)
    expect(square.find('div').hasClass('square')).toBe(true)
  })
})
