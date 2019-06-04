import React from 'react'
import { RawMaterial } from './RawMaterial'
import { shallow } from 'enzyme'

describe('the raw material component', () => {
  it('creates a raw material item with a color', function () {
    let color = 'black'
    const rawMaterial = shallow(<RawMaterial color={color} />)
    const rawMaterialColor = rawMaterial.find('.raw-material-color')

    expect(rawMaterialColor.props().style.backgroundColor).toBe(color)
  })

  it('executes the onClick', () => {
    let executed = false
    const onClick = () => {
      executed = true
    }
    let rawMaterial = shallow(<RawMaterial onClick={onClick} />)

    rawMaterial.find('div.raw-material').simulate('click')
    expect(executed).toBe(true)
  })
})
