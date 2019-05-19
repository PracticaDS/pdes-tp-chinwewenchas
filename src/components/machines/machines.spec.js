import { east, north, position, positionAt, south, west } from './direction'
import {
  isNoneMachine,
  newMachine,
  NONE_MACHINE,
  pointTo,
  rotateMachine,
  STARTER_MACHINE,
  tickMachine,
  TRANSPORTER_MACHINE,
  withMaterial
} from './machines'
import {
  addMachine,
  emptyFactory,
  machineAt,
  materialTo,
  updatePositionWith
} from '../factory/factoryLib'

describe('machines', function () {
  let machinePosition = position(1, 1)
  describe('creation', function () {
    describe('when create a starter machineCreator', function () {
      const starterMachine = newMachine(machinePosition, STARTER_MACHINE)
      it('creates with defauls props', () => {
        expect(starterMachine.type).toBe(STARTER_MACHINE)
        expect(starterMachine.props.position).toBe(machinePosition)
        expect(starterMachine.props.active).toBe(false)
        expect(starterMachine.props.direction).toEqual(south())
        expect(starterMachine.props.material).toBe(undefined)
      })
    })
    describe('when create a transporter machineCreator', () => {
      const transporterMachine = newMachine(
        machinePosition,
        TRANSPORTER_MACHINE
      )
      it('creates it with the defauls props', () => {
        expect(transporterMachine.type).toBe(TRANSPORTER_MACHINE)
        expect(transporterMachine.props.position).toEqual(machinePosition)
        expect(transporterMachine.props.active).toBe(false)
        expect(transporterMachine.props.direction).toEqual(south())
        expect(transporterMachine.props.materials).toEqual([])
      })
    })
    describe('when create a none machineCreator', function () {
      const noneMachine = newMachine(machinePosition, NONE_MACHINE)
      it('creates it with a position and material count in zero', () => {
        expect(noneMachine.type).toBe(NONE_MACHINE)
        expect(noneMachine.props.position).toBe(machinePosition)
        expect(noneMachine.props.materialCount).toBe(0)
      })
    })
    describe('when try to create any other', function () {
      const noneMachine = newMachine(machinePosition, 'lalalalala')
      it('creates a none machineCreator', () => {
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
  describe('receive material', () => {
    describe('when the receiver it is a transporter', () => {
      let fromMachine
      let machine
      const someMaterials = ['lala', 'lolo']
      const anotherMaterial = ['lele']

      const itShouldAccumulateMaterialInIt = () => {
        let withMaterialMachine = withMaterial(
          withMaterial(machine, someMaterials, fromMachine.props.position),
          anotherMaterial,
          fromMachine.props.position
        )
        expect(withMaterialMachine.props.materials).toContain(someMaterials[0])
        expect(withMaterialMachine.props.materials).toContain(someMaterials[1])
        expect(withMaterialMachine.props.materials).toContain(
          anotherMaterial[0]
        )
        expect(withMaterialMachine.props.active).toBe(true)
      }

      describe('when the transporter direction is south', () => {
        beforeEach(() => {
          machine = newMachine(machinePosition, TRANSPORTER_MACHINE)
          machine = pointTo(machine, south())
        })
        test('can receive material from north', () => {
          fromMachine = newMachine(
            positionAt(machinePosition, north()),
            STARTER_MACHINE
          )
          itShouldAccumulateMaterialInIt()
        })
        test('can receive material from east', () => {
          fromMachine = newMachine(
            positionAt(machinePosition, east()),
            STARTER_MACHINE
          )
          itShouldAccumulateMaterialInIt()
        })
        test('can receive material from west', () => {
          fromMachine = newMachine(
            positionAt(machinePosition, west()),
            STARTER_MACHINE
          )
          itShouldAccumulateMaterialInIt()
        })
        test('can not receive material from south', () => {
          fromMachine = newMachine(
            positionAt(machinePosition, south()),
            STARTER_MACHINE
          )
          let withMaterialMachine = withMaterial(
            withMaterial(machine, someMaterials, fromMachine.props.position),
            anotherMaterial,
            fromMachine.props.position
          )
          expect(withMaterialMachine).toBe(machine)
        })
      })
    })
    describe('when the receiver it is a none machineCreator', () => {
      let machine = newMachine(machinePosition, NONE_MACHINE)
      it('should increase the material counter', () => {
        let withMaterialMachine = withMaterial(
          withMaterial(machine, ['lala', 'lolo']),
          ['lele']
        )
        expect(withMaterialMachine.props.materialCount).toBe(3)
      })
    })
    describe('when the receiver it is a starter machineCreator', () => {
      let machine = newMachine(machinePosition, STARTER_MACHINE)
      const material = 'lala'
      it('should set the material to produce', () => {
        let withMaterialMachine = withMaterial(machine, material)
        expect(withMaterialMachine.props.material).toBe(material)
      })
    })
    describe('when the receiver it is any other machineCreator', () => {
      let machine = { type: 'lala' }
      const material = 'lele'
      it('should return the machineCreator unmodified', () => {
        let withMaterialMachine = withMaterial(machine, material)
        expect(withMaterialMachine).toBe(machine)
      })
    })
  })
  describe('tick', () => {
    let factory = emptyFactory()

    const machineDirectionTo = (machinePosition, direction, factory) => {
      return updatePositionWith(
        machinePosition,
        machine => pointTo(machine, direction),
        factory
      )
    }

    function itReturnsTheFactoryUnmodified (machinePosition, newFactory) {
      expect(tickMachine(newFactory, machinePosition)).toEqual(newFactory)
    }

    function andTheMachineDirectionIs (direction, factory) {
      describe(`and the machine direction is ${direction.direction}`, () => {
        test('because there are no machineCreator there', () => {
          itReturnsTheFactoryUnmodified(
            machinePosition,
            machineDirectionTo(machinePosition, direction, factory)
          )
        })
      })
    }

    describe('when tick on starter machineCreator', () => {
      let newFactory = addMachine(machinePosition, STARTER_MACHINE, factory)

      describe('and cant deliver material', () => {
        test('because the starter dont have a material selected', () => {
          itReturnsTheFactoryUnmodified(machinePosition, newFactory)
        })
        andTheMachineDirectionIs(south(), newFactory)
        andTheMachineDirectionIs(north(), newFactory)
        andTheMachineDirectionIs(west(), newFactory)
        andTheMachineDirectionIs(east(), newFactory)
      })

      describe('and can deliver material', () => {
        describe('because the starter has a material selected', () => {
          describe('and the machineCreator direction is south', () => {
            describe('because there are a machineCreator at south', () => {
              let material = 'gold'
              let newMachinePosition = positionAt(machinePosition, south())
              let successTickFactory = materialTo(
                machinePosition,
                material,
                newFactory
              )
              successTickFactory = machineDirectionTo(
                machinePosition,
                south(),
                successTickFactory
              )
              successTickFactory = addMachine(
                newMachinePosition,
                NONE_MACHINE,
                successTickFactory
              )
              it('deliver material there', () => {
                expect(
                  machineAt(
                    newMachinePosition,
                    tickMachine(successTickFactory, machinePosition)
                  ).props.materialCount
                ).toEqual(1)
              })
            })
          })
        })
      })
    })
    describe('when tick on a transporter machineCreator', () => {
      let transporterPosition
      let newFactory

      beforeEach(() => {
        transporterPosition = position(1, 1)
        newFactory = addMachine(
          transporterPosition,
          TRANSPORTER_MACHINE,
          factory
        )
      })
      test('when the transporter is empty', function () {
        itReturnsTheFactoryUnmodified(machinePosition, newFactory)
      })
      it('when the transporter has materials to deliver', () => {
        const otherMachinePosition = positionAt(transporterPosition, south())
        const fromPosition = positionAt(transporterPosition, north())

        newFactory = machineDirectionTo(
          transporterPosition,
          south(),
          newFactory
        )
        newFactory = addMachine(otherMachinePosition, NONE_MACHINE, newFactory)
        newFactory = materialTo(
          transporterPosition,
          ['lala', 'lele'],
          newFactory,
          fromPosition
        )
        newFactory = tickMachine(newFactory, transporterPosition)

        expect(
          machineAt(transporterPosition, newFactory).props.materials.length
        ).toBe(0)
        expect(machineAt(transporterPosition, newFactory).props.active).toBe(
          false
        )
        expect(
          machineAt(otherMachinePosition, newFactory).props.materialCount
        ).toBe(2)
      })
    })
    test('when tick on any other machineCreator', () => {
      let newFactory = addMachine(machinePosition, NONE_MACHINE, factory)
      itReturnsTheFactoryUnmodified(machinePosition, newFactory)
    })
  })
})
