import {
  addMachine,
  createFactoryBoard,
  emptyFactory,
  findAndRotateMachine,
  machineAt
} from './factoryLib'
import { column, position, row, south, west } from '../machines/direction'
import { newMachine, NONE_MACHINE, STARTER_MACHINE } from '../machines/machines'

describe('factory lib', function () {
  describe('an empty factory', () => {
    it('creates an empty factory', function () {
      expect(emptyFactory()).toEqual({ rows: 0, columns: 0, totalSells: 0 })
    })
  })
  xdescribe('create factory board', () => {
    function itCellIs (position, machine, factory) {
      it(`cell in position ${row(position)} ${column(
        position
      )} contains`, () => {
        expect(machineAt(position, factory)).toEqual(machine)
      })
    }
    describe('with size of 2', () => {
      let factory = createFactoryBoard(2)
      itCellIs(
        position(0, 0),
        newMachine(position(0, 0), NONE_MACHINE),
        factory
      )
      itCellIs(
        position(0, 1),
        newMachine(position(0, 1), NONE_MACHINE),
        factory
      )
      itCellIs(
        position(1, 0),
        newMachine(position(1, 0), NONE_MACHINE),
        factory
      )
      itCellIs(
        position(1, 1),
        newMachine(position(1, 1), NONE_MACHINE),
        factory
      )

      it('rows are 2', () => {
        expect(factory.rows).toBe(2)
      })
      it('columns are 2', () => {
        expect(factory.columns).toBe(2)
      })
    })
  })

  describe('add a machineCreator', () => {
    xdescribe('when there are no machineCreator at that position', () => {
      let factory = emptyFactory()
      it('adds it', () => {
        let machinePosition = position(0, 0)
        expect(
          addMachine(machinePosition, NONE_MACHINE, factory)[0][0]
        ).toEqual(newMachine(machinePosition, NONE_MACHINE))
      })
    })
    xdescribe('when there are a machineCreator at that position', () => {
      let factory = createFactoryBoard(1)
      it('replace it', () => {
        let machinePosition = position(0, 0)

        expect(factory[0][0]).toEqual(newMachine(machinePosition, NONE_MACHINE))

        expect(
          addMachine(machinePosition, STARTER_MACHINE, factory)[0][0]
        ).toEqual(newMachine(machinePosition, STARTER_MACHINE))
      })
    })
  })

  describe('rotate a machineCreator', () => {
    let machinePosition = position(0, 0)
    let factory = addMachine(machinePosition, STARTER_MACHINE, emptyFactory())
    it('rotates it clockwise', () => {
      expect(machineAt(machinePosition, factory).props.direction).toEqual(
        south()
      )
      expect(
        machineAt(
          machinePosition,
          findAndRotateMachine(machinePosition, factory)
        ).props.direction
      ).toEqual(west())
    })
  })
})
