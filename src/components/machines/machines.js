import {
  isPositionAtDirection,
  positionAt,
  south,
  turnClockwise
} from './direction'
import {
  machineAt,
  materialTo,
  updatePositionWith
} from '../factory/factoryLib'

export const STARTER_MACHINE = 'STARTER_MACHINE'
const starterMachine = position => {
  return {
    type: STARTER_MACHINE,
    props: {
      position: position,
      active: false,
      direction: south()
    }
  }
}

export const NONE_MACHINE = 'NONE_MACHINE'
const noneMachine = position => {
  return {
    type: NONE_MACHINE,
    props: {
      position: position,
      materialCount: 0
    }
  }
}

export const TRANSPORTER_MACHINE = 'TRANSPORTER_MACHINE'
const transporterMachine = position => {
  return {
    type: TRANSPORTER_MACHINE,
    props: {
      position: position,
      active: false,
      direction: south(),
      materials: []
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
    case TRANSPORTER_MACHINE:
      return transporterMachine(position)
    default:
      return noneMachine(position)
  }
}

export const tickMachine = (factory, position) => {
  const machine = factory[position.y][position.x]
  switch (machine.type) {
    case STARTER_MACHINE:
      return tickToStarter(factory, machine)
    case TRANSPORTER_MACHINE:
      return tickToTransporter(factory, machine)
    default:
      return factory
  }
}

const withMaterialsTick = (factory, machine, materials) => {
  let positionToDeliverMaterials = positionAt(
    machine.props.position,
    machine.props.direction
  )
  if (canSendMaterials(factory, materials, positionToDeliverMaterials)) {
    return materialTo(
      positionToDeliverMaterials,
      materials,
      factory,
      machine.props.position
    )
  }
  return factory
}
const tickToTransporter = (factory, machine) => {
  const materials = machine.props.materials
  const newfactory = withMaterialsTick(factory, machine, materials)
  return updatePositionWith(
    machine.props.position,
    transporter => clearMaterials(transporter),
    newfactory
  )
}

const clearMaterials = transporter => {
  return {
    ...transporter,
    props: {
      ...transporter.props,
      materials: [],
      active: false
    }
  }
}

const tickToStarter = (factory, machine) => {
  return withMaterialsTick(
    factory,
    machine,
    machine.props.material ? [machine.props.material] : []
  )
}

const canSendMaterials = (factory, materials, position) => {
  return materials && materials.length > 0 && machineAt(position, factory)
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

export const withMaterial = (machine, materials, fromPosition = undefined) => {
  switch (machine.type) {
    case NONE_MACHINE:
      return materialForNoneMachine(machine, materials)
    case TRANSPORTER_MACHINE:
      return materialForTransporter(machine, materials, fromPosition)
    case STARTER_MACHINE:
      return materialForStarter(machine, materials)
    default:
      return machine
  }
}

const materialForStarter = (machine, material) => {
  return {
    ...machine,
    props: {
      ...machine.props,
      material: material
    }
  }
}

const materialForTransporter = (machine, materials, fromPosition) => {
  if (
    isPositionAtDirection(
      machine.props.position,
      machine.props.direction,
      fromPosition
    )
  ) {
    return machine
  } else {
    return {
      ...machine,
      props: {
        ...machine.props,
        materials: [...machine.props.materials, ...materials],
        active: true
      }
    }
  }
}

const materialForNoneMachine = (machine, materials) => {
  return {
    ...machine,
    props: {
      ...machine.props,
      materialCount: machine.props.materialCount + materials.length
    }
  }
}
export const activate = machine => {
  return {
    ...machine,
    props: {
      ...machine.props,
      active: true
    }
  }
}

export const isOfType = (machine, type) => {
  return machine.type === type
}
