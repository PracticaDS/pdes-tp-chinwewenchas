import React from 'react'
import App from '../App'
import { mount } from 'enzyme'
import { storeInstance } from '../store'
import { tick } from '../components/factory/actions'
import {
  materialProfit,
  meltMaterials,
  newMaterial,
  SILVER
} from '../components/machines/materials'
import { machineAt } from '../components/factory/factoryLib'
import { position } from '../components/machines/direction'

const onToolbox = (app, callback) => {
  callback(app.find('.toolbox-board'))
}
const onMachine = (machine, callback, app) => {
  callback(app.find(machine))
}
const click = app => {
  app.simulate('click')
}

const onFactoryPosition = (app, position, callback) => {
  callback(app.find('.factory').find(`[position="${position}"]`))
}

const onMaterial = (material, callback, app) => {
  callback(
    app
      .find('.raw_material-name')
      .filterWhere(item => item.props().children === material)
      .parent()
  )
}

const onRawMaterialPopUp = (app, callback) => {
  callback(app.find('.raw-material-selector'))
}

const withMachine = (machine, position, app) => {
  onToolbox(app, toolbox => onMachine(machine, click, toolbox))
  onFactoryPosition(app, position, position =>
    onMachine('.none_machine', click, position)
  )
}

const machineAbsent = machine => {
  expect(machine.length).toBe(0)
}
const machinePresent = machine => {
  expect(machine.length).toBe(1)
}

const deleteOn = (position, machine, app) => {
  onToolbox(app, toolbox => onMachine('.remove', click, toolbox))
  onFactoryPosition(app, position, position =>
    onMachine(machine, click, position)
  )
}

const rotateOn = (position, machine, app) => {
  onToolbox(app, toolbox => onMachine('.rotate', click, toolbox))
  onFactoryPosition(app, position, position =>
    onMachine(machine, click, position)
  )
}

const moveFromTo = (positionFrom, positionTo, machine, app) => {
  onToolbox(app, toolbox => onMachine('.move', click, toolbox))
  onFactoryPosition(app, positionFrom, position =>
    onMachine(machine, click, position)
  )
  onFactoryPosition(app, positionTo, position =>
    onMachine('.none_machine', click, position)
  )
}

const tickFactory = () => {
  storeInstance.dispatch(tick())
}
describe('App', () => {
  let app
  beforeEach(() => {
    app = mount(<App />)
  })
  afterEach(() => {
    app.unmount()
  })
  describe('Machines addition', () => {
    describe('When clicked on Starter button and then on board position (1,1)', () => {
      test('creates a Starter machine at (1,1) on the board', () => {
        onToolbox(app, toolbox => onMachine('.starter', click, toolbox))
        onFactoryPosition(app, 11, position =>
          onMachine('.none_machine', click, position)
        )

        const assert = starter => {
          expect(starter.length).toBe(1)
        }
        onFactoryPosition(app, 11, position =>
          onMachine('.starter', assert, position)
        )
      })
    })
    describe('When clicked on Transporter button and then on board position (2,1)', () => {
      test('creates a Transporter machine at (2,1) on the board', () => {
        onToolbox(app, toolbox => onMachine('.transporter', click, toolbox))
        onFactoryPosition(app, 21, position =>
          onMachine('.none_machine', click, position)
        )

        const assert = transporter => {
          expect(transporter.length).toBe(1)
        }
        onFactoryPosition(app, 21, position =>
          onMachine('.transporter', assert, position)
        )
      })
    })
    describe('When clicked on Seller button and then on board position (3,1)', () => {
      test('creates a Seller machine at (3,1) on the board', () => {
        onToolbox(app, toolbox => onMachine('.seller', click, toolbox))
        onFactoryPosition(app, 31, position =>
          onMachine('.none_machine', click, position)
        )

        const assert = seller => {
          expect(seller.length).toBe(1)
        }
        onFactoryPosition(app, 31, position =>
          onMachine('.seller', assert, position)
        )
      })
    })
    describe('When clicked on Furnace button and then on board position (4,1)', () => {
      test('creates a Furnace machine at (4,1) on the board', () => {
        onToolbox(app, toolbox => onMachine('.furnace', click, toolbox))
        onFactoryPosition(app, 41, position =>
          onMachine('.none_machine', click, position)
        )

        const assert = furnace => {
          expect(furnace.length).toBe(1)
        }
        onFactoryPosition(app, 41, position =>
          onMachine('.furnace', assert, position)
        )
      })
    })
    describe('When clicked on Crafter button and then on board position (5,1)', () => {
      test('creates a Crafter machine at (4,4) on the board', () => {
        onToolbox(app, toolbox => onMachine('.crafter', click, toolbox))
        onFactoryPosition(app, 44, position =>
          onMachine('.none_machine', click, position)
        )

        const assert = crafter => {
          expect(crafter.length).toBe(1)
        }
        onFactoryPosition(app, 44, position =>
          onMachine('.crafter', assert, position)
        )
      })
    })
  })
  describe('Machines deletion', () => {
    describe('with a starter on 1,1 and a transporter on 1,2', () => {
      beforeEach(() => {
        withMachine('.starter', 11, app)
        withMachine('.transporter', 12, app)
      })
      describe('When clicked on the deletion button and then on board position (1,1)', () => {
        test('only deletes the starter', () => {
          deleteOn(11, '.starter', app)
          onFactoryPosition(app, 11, position =>
            onMachine('.starter', machineAbsent, position)
          )
          onFactoryPosition(app, 12, position =>
            onMachine('.transporter', machinePresent, position)
          )
        })
      })
    })
  })
  describe('Machines rotation', () => {
    describe('with a starter on 1,1 and a transporter on 1,2', () => {
      beforeEach(() => {
        withMachine('.starter', 11, app)
        withMachine('.transporter', 12, app)
      })
      describe('When clicked on the rotate button and then on board position (1,1)', () => {
        const machineRotates = machine => {
          expect(machine.find('img').props().style.transform).toEqual(
            'rotate(0.25turn)'
          )
        }
        const machineNotRotates = machine => {
          expect(machine.find('img').props().style.transform).toEqual(
            'rotate(0turn)'
          )
        }
        test('only rotates the starter', () => {
          rotateOn(11, '.starter', app)
          onFactoryPosition(app, 11, position =>
            onMachine('.starter', machineRotates, position)
          )
          onFactoryPosition(app, 12, position =>
            onMachine('.transporter', machineNotRotates, position)
          )
        })
      })
    })
  })
  describe('Machines move', () => {
    describe('with a starter on 1,1 and a transporter on 1,2', () => {
      beforeEach(() => {
        withMachine('.starter', 11, app)
        withMachine('.transporter', 12, app)
      })
      describe('When clicked on the move button then on board position (1,1) and then on the position (1,3)', () => {
        test('move the starter', () => {
          moveFromTo(11, 13, '.starter', app)
          onFactoryPosition(app, 11, position =>
            onMachine('.starter', machineAbsent, position)
          )
          onFactoryPosition(app, 12, position =>
            onMachine('.transporter', machinePresent, position)
          )
          onFactoryPosition(app, 13, position =>
            onMachine('.starter', machinePresent, position)
          )
        })
      })
    })
  })
  describe('factory board', () => {
    beforeEach(() => {
      clearInterval(storeInstance.getState().factory.timer)
    })
    describe('with some machines in it', () => {
      beforeEach(() => {
        withMachine('.starter', '03', app)
        onFactoryPosition(app, '03', position => {
          onMachine('.starter', click, position)
        })
        onRawMaterialPopUp(app, popup => onMaterial('Aluminio', click, popup))
        withMachine('.furnace', '13', app)
        withMachine('.transporter', '23', app)
        rotateOn('23', '.transporter', app)
        withMachine('.transporter', '22', app)
        rotateOn('22', '.transporter', app)
        rotateOn('22', '.transporter', app)
        withMachine('.seller', '12', app)
      })
      const hasImageActive = machine => {
        expect(
          machine
            .find('img')
            .props()
            .src.includes('active')
        ).toBe(true)
      }
      test('after one tick ', () => {
        tickFactory()
        expect(
          machineAt(position(1, 3), storeInstance.getState().factory).props
            .materials
        ).toContain(newMaterial(SILVER))
        onFactoryPosition(app, '03', position => {
          onMachine('.starter', hasImageActive, position)
        })
      })
      test('after two ticks ', () => {
        tickFactory()
        tickFactory()
        expect(
          machineAt(position(2, 3), storeInstance.getState().factory).props
            .materials
        ).toContain(newMaterial(SILVER))
        onFactoryPosition(app, '13', position => {
          onMachine('.furnace', hasImageActive, position)
        })
      })
      test('after three ticks ', () => {
        tickFactory()
        tickFactory()
        tickFactory()
        expect(
          machineAt(position(2, 2), storeInstance.getState().factory).props
            .materials
        ).toContain(newMaterial(SILVER))
        onFactoryPosition(app, '23', position => {
          onMachine('.transporter', hasImageActive, position)
        })
      })
      test('after four ticks ', () => {
        tickFactory()
        tickFactory()
        tickFactory()
        tickFactory()
        expect(
          machineAt(position(1, 2), storeInstance.getState().factory).props
            .materials
        ).toContain(newMaterial(SILVER))
        onFactoryPosition(app, '22', position => {
          onMachine('.transporter', hasImageActive, position)
        })
      })
      test('after five ticks ', () => {
        tickFactory()
        tickFactory()
        tickFactory()
        tickFactory()
        tickFactory()
        expect(storeInstance.getState().factory.totalSells).toBe(
          materialProfit(meltMaterials([newMaterial(SILVER)])[0])
        )
        onFactoryPosition(app, '12', position => {
          onMachine('.transporter', hasImageActive, position)
        })
      })
    })
  })
})
