import { mount } from 'enzyme'
import { Square } from '../square/Square'
import React from 'react'
import { Board } from './Board'

describe('Board', () => {
  function createBoard (columns = 6, rows = 6) {
    const board = mount(<Board columns={columns} rows={rows} />)
    return board
  }

  it('deberia tener una cantidad de cuadrados acorde a filas * columnas', () => {
    const board = createBoard(2, 2)
    expect(board.find(Square).length).toEqual(4)
  })
})
