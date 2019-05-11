import { mount } from 'enzyme'
import React from 'react'
import { Seller } from './Seller'

describe('sellers', () => {
  it('el componente visual debería tener la clase seller', () => {
    const seller = mount(<Seller />)
    expect(seller.find('div').hasClass('seller')).toBe(true)
  })
})
