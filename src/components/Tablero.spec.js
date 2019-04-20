import { mount } from 'enzyme';
import { Ficha } from './Ficha';
import React from 'react';
import { Tablero } from './Tablero';

describe("Tablero", () => {
  function crearTablero(columnas=6 ,filas=6) {
    const tablero = mount(<Tablero columnas={columnas} filas={filas} />);
    return tablero;
  }
  
  it("deberia tener una cantidad de fichas pares", () => {
    const tablero = crearTablero(2,2);
    expect(tablero.find(Ficha).length).toEqual(4);
  })

  
});


