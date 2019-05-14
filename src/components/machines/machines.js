import { positionAt, south, turnClockwise } from './direction'
import { machineAt, materialTo } from '../factory/factoryLib'

export const STARTER_MACHINE = 'STARTER_MACHINE'
const starterMachine = id => {
  return {
    type: STARTER_MACHINE,
    props: {
      id: id,
      active: false,
      direction: south()
    }
  }
}

export const NONE_MACHINE = 'NONE_MACHINE'
const noneMachine = id => {
  return {
    type: NONE_MACHINE,
    props: {
      id
    }
  }
}

export const isNoneMachine = machine => {
  return machine.type === NONE_MACHINE
}

export const newMachine = (position, machineType) => {
  switch (machineType) {
    case STARTER_MACHINE:
      return starterMachine(position)
    default:
      return noneMachine(position)
  }
}

export const tickMachine = (state, position) => {
  const machine = state[position.y][position.x]
  switch (machine.type) {
    case STARTER_MACHINE:
      return tickToStarter(state, machine)
    default:
      return state
  }
}

const tickToStarter = (factory, machine) => {
  let positionToDeliverMaterial = positionAt(
    machine.props.id,
    machine.props.direction
  )
  if (canSendMaterial(factory, machine, positionToDeliverMaterial)) {
    return materialTo(
      positionToDeliverMaterial,
      machine.props.material,
      factory
    )
  }
  return factory
}

const canSendMaterial = (factory, machine, position) => {
  return machine.props.material && machineAt(position, factory)
}

export const rotateMachine = machine => {
  return {
    ...machine,
    props: {
      ...machine.props,
      direction: turnClockwise(machine.props.direction)
    }
  }
}

export const pointTo = (machine, direction) => {
  return { ...machine, props: { ...machine.props, direction: direction } }
}

export const withMaterial = (machine, material) => {
  return {
    ...machine,
    props: {
      ...machine.props,
      material: material
    }
  }
}
