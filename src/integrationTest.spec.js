import { mount } from 'enzyme/build'
import React from 'react'
import App from './App'

describe('App', () => {
  xdescribe('Machines addition', () => {
    describe('When clicked on Starter button and then on board position (1,1)', () => {
      it('should create a Starter machine at (1,1) on the board', () => {
        const app = mount(<App />)
        app
          .find('div.toolbox-board')
          .find('div.starter')
          .simulate('click')(app.find('div.factory').find('td')[0])
          .find('.none_machine')
          .simulate('click')

        // Verificar elemento en el state
      })

      describe('And then clicked on Transporter button and then on board position (2,1)', () => {
        it('should create a Starter machine at (1,1) and a Transporter machine at (2,1) on the board', () => {
          const app = mount(<App />)
          app
            .find('div.toolbox-board')
            .find('div.starter')
            .simulate('click')(app.find('div.factory').find('td')[0])
            .find('.none_machine')
            .simulate('click')

          app
            .find('div.toolbox-board')
            .find('div.transporter')
            .simulate('click')(app.find('div.factory').find('td')[5])
            .find('.none_machine')
            .simulate('click')

          // Verificar elementos en el state
        })

        describe('And then clicked on Seller button and then on board position (3,1)', () => {
          it('should create a Starter machine at (1,1), a Transporter machine at (2,1) and a Seller machine at (3,1) on the board', () => {
            const app = mount(<App />)
            app
              .find('div.toolbox-board')
              .find('div.starter')
              .simulate('click')(app.find('div.factory').find('td')[0])
              .find('.none_machine')
              .simulate('click')

            app
              .find('div.toolbox-board')
              .find('div.transporter')
              .simulate('click')(app.find('div.factory').find('td')[5])
              .find('.none_machine')
              .simulate('click')

            app
              .find('div.toolbox-board')
              .find('div.seller')
              .simulate('click')(app.find('div.factory').find('td')[10])
              .find('.none_machine')
              .simulate('click')

            // Verificar elementos en el state
          })

          describe('And then clicked on the added starter and then selected gold', () => {
            it('should create a Starter machine at (1,1), a Transporter machine at (2,1) and a Seller machine at (3,1) on the board', () => {
              const app = mount(<App />)
              app
                .find('div.toolbox-board')
                .find('div.starter')
                .simulate('click')(app.find('div.factory').find('td')[0])
                .find('.none_machine')
                .simulate('click')

              app
                .find('div.toolbox-board')
                .find('div.transporter')
                .simulate('click')(app.find('div.factory').find('td')[5])
                .find('.none_machine')
                .simulate('click')

              app
                .find('div.toolbox-board')
                .find('div.seller')
                .simulate('click')(app.find('div.factory').find('td')[10])
                .find('.none_machine')
                .simulate('click')
              app
                .find('div.factory')
                .find('td')[0]
                .find('.none_machine')
                .simulate('click')
              app.find('div.raw-material-selector-item')[0].simulate('click')

              // Verificar elementos en el state
              // Verificar la plata, dejando pasar tiempo
            })
          })
        })
      })
    })
  })
})
