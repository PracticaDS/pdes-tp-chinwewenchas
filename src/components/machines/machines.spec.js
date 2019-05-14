import { east, north, position, positionAt, south, west } from './direction'
import {
  isNoneMachine,
  newMachine,
  NONE_MACHINE,
  pointTo,
  rotateMachine,
  STARTER_MACHINE,
  tickMachine,
  withMaterial
} from './machines'
import {
  addMachine,
  emptyFactory,
  machineAt,
  updatePositionWith
} from '../factory/factoryLib'

describe('machines', function () {
  let machinePosition = position(1, 1)
  describe('creation', function () {
    describe('when create a starter machine', function () {
      const starterMachine = newMachine(machinePosition, STARTER_MACHINE)
      it('creates with defauls props', () => {
        expect(starterMachine.type).toBe(STARTER_MACHINE)
        expect(starterMachine.props.id).toBe(machinePosition)
        expect(starterMachine.props.id).toBe(machinePosition)
        expect(starterMachine.props.active).toBe(false)
        expect(starterMachine.props.direction).toEqual(south())
      })
    })

    describe('when create a none machine', function () {
      const noneMachine = newMachine(machinePosition, NONE_MACHINE)
      it('creates it with a position', () => {
        expect(noneMachine.type).toBe(NONE_MACHINE)
        expect(noneMachine.props.id).toBe(machinePosition)
      })
    })
    describe('when try to create any other', function () {
      const noneMachine = newMachine(machinePosition, 'lalalalala')
      it('creates a none machine', () => {
        expect(noneMachine.type).toBe(NONE_MACHINE)
      })
    })
  })

  describe('funtion isNoneMachine', () => {
    describe('when is NoneMachine', () => {
      let machine = newMachine(machinePosition, NONE_MACHINE)
      it('returns true', function () {
        expect(isNoneMachine(machine)).toBe(true)
      })
    })
    describe('when is not NoneMachine', function () {
      let machine = newMachine(machinePosition, STARTER_MACHINE)
      it('returns false', function () {
        expect(isNoneMachine(machine)).toBe(false)
      })
    })
  })

  describe('rotation', () => {
    let baseMachine = newMachine(machinePosition, NONE_MACHINE)

    function expectsRotateMachineTo (machine, expectedDirection) {
      it('rotates', () => {
        let direction = rotateMachine(machine).props.direction
        expect(direction).toEqual(expectedDirection)
      })
    }

    describe('when the direction is north', () => {
      expectsRotateMachineTo(pointTo(baseMachine, north()), east())
    })

    describe('when the direction is south', () => {
      expectsRotateMachineTo(pointTo(baseMachine, south()), west())
    })
    describe('when the direction is west', () => {
      expectsRotateMachineTo(pointTo(baseMachine, west()), north())
    })
    describe('when the direction is east', () => {
      expectsRotateMachineTo(pointTo(baseMachine, east()), south())
    })
  })

  describe('tick', () => {
    let factory = emptyFactory()

    const factoryWithMachineOnPosition = (machineType, position, factory) => {
      return addMachine(position, machineType, factory)
    }

    const machineDirectionTo = (machinePosition, direction, factory) => {
      return updatePositionWith(
        machinePosition,
        machine => pointTo(machine, direction),
        factory
      )
    }

    function itReturnsTheFactoryUnmodified (newFactory) {
      it('returns the factory unmodified', () => {
        expect(tickMachine(newFactory, machinePosition)).toEqual(newFactory)
      })
    }

    function andTheMachineDirectionIs (direction, factory) {
      describe(`and the machine direction is ${direction.direction}`, () => {
        describe('because there are no machine there', () => {
          itReturnsTheFactoryUnmodified(
            machineDirectionTo(machinePosition, direction, factory)
          )
        })
      })
    }

    describe('when tick on starter machine', () => {
      let newFactory = factoryWithMachineOnPosition(
        STARTER_MACHINE,
        machinePosition,
        factory
      )

      describe('and cant deliver material', () => {
        describe('because the starter dont have a material selected', () => {
          itReturnsTheFactoryUnmodified(newFactory)
        })
        andTheMachineDirectionIs(south(), newFactory)
        andTheMachineDirectionIs(north(), newFactory)
        andTheMachineDirectionIs(west(), newFactory)
        andTheMachineDirectionIs(east(), newFactory)
      })

      describe('and can deliver material', () => {
        describe('because the starter has a material selected', () => {
          describe('and the machine direction is south', () => {
            describe('because there are a machine at south', () => {
              let material = 'gold'
              let newMachinePosition = positionAt(machinePosition, south())
              let successTickFactory = factoryWithMachineOnPosition(
                NONE_MACHINE,
                newMachinePosition,
                machineDirectionTo(
                  machinePosition,
                  south(),
                  updatePositionWith(
                    machinePosition,
                    machine => withMaterial(machine, material),
                    newFactory
                  )
                )
              )
              it('deliver material there', () => {
                expect(
                  machineAt(
                    newMachinePosition,
                    tickMachine(successTickFactory, machinePosition)
                  ).props.material
                ).toEqual(material)
              })
            })
          })
        })
      })
    })

    describe('when tick on any other machine', () => {
      let newFactory = factoryWithMachineOnPosition(
        NONE_MACHINE,
        machinePosition,
        factory
      )
      itReturnsTheFactoryUnmodified(newFactory)
    })
  })
})
