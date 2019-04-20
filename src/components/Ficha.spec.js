
import { mount } from 'enzyme';
import React from 'react';
import { Ficha } from './Ficha';


describe("fichas", () => {
  it("deberia estar boca abajo al crearse", () => {
    const ficha = mount(<Ficha />)
    expect(ficha.find("div.ficha").hasClass("bocaAbajo")).toBe(true);
  })

});