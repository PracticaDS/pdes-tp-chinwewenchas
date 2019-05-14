import { mount } from 'enzyme'
import React from 'react'
import { Transporter } from './Transporter'

describe('transporters', () => {
  it('el componente visual debería tener la clase transporter', () => {
    const transporter = mount(<Transporter direction={'left'} />)
    expect(transporter.find('div').hasClass('transporter')).toBe(true)
  })
})
