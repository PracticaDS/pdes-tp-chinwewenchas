import { shallow } from 'enzyme'
import React from 'react'
import { Starter } from './Starter'

describe('starter', () => {
  it('do click when click on it', () => {
    let executed = false
    const click = () => {
      executed = true
    }
    const starter = shallow(<Starter onClick={click} />)

    starter.find('div.starter').simulate('click')
    expect(executed).toBe(true)
  })
  describe('when is inactive', () => {
    let starter = shallow(<Starter />)

    it('shows inactive image', () => {
      expect(starter.find('img').props()).toEqual({ src: '/icons/starter.svg' })
    })

    describe('and receive tick', () => {
      let executed = false
      it('does not excecutes the onTick', () => {
        starter.setProps({
          tick: true,
          onTick: () => {
            executed = true
          }
        })
        expect(executed).toBe(false)
      })
    })
  })
  describe('when is active', () => {
    let starterId = 1
    let starter = shallow(<Starter active id={starterId} />)

    it('shows active image', () => {
      expect(starter.find('img').props()).toEqual({
        src: '/icons/starter_active.svg'
      })
    })

    describe('and receive tick', () => {
      let executed = false
      let expectedId

      it('excecutes the onTick with the id parameter', () => {
        starter.setProps({
          tick: true,
          onTick: id => {
            executed = true
            expectedId = id
          }
        })

        expect(executed).toBe(true)
        expect(expectedId).toBe(starterId)
      })
    })
  })
})
