import {
  FURNACE_MACHINE,
  isOfType,
  SELLER_MACHINE,
  STARTER_MACHINE,
  TRANSPORTER_MACHINE
} from '../machines/machines'

export const MATERIAL_FOR_STARTER = 'MATERIAL_FOR_STARTER'
export const materialForStarter = (position, material) => {
  return {
    type: MATERIAL_FOR_STARTER,
    position: position,
    material
  }
}

export const ADD_MACHINE = 'ADD_MACHINE'
export const addMachine = (position, machineType) => {
  return {
    type: ADD_MACHINE,
    machineType: machineType,
    position
  }
}

export const ROTATE = 'ROTATE'
export const rotateMachine = position => {
  return {
    type: ROTATE,
    position
  }
}

export const POSITION = 'POSITION'
export const actualPosition = position => {
  return {
    type: POSITION,
    position
  }
}

export const REMOVE_MACHINE = 'REMOVE_MACHINE'
export const removeMachine = position => {
  return {
    type: REMOVE_MACHINE,
    position
  }
}

export const MOVE_MACHINE = 'MOVE_MACHINE'
export const moveMachine = position => {
  return {
    type: MOVE_MACHINE,
    position
  }
}
export const TICK = 'TICK'
export const tick = () => {
  return (dispatch, getState) => {
    if (!getState().factory.timer) {
      let timer = setInterval(
        () => dispatch(doTick(findMachinesToTick(getState().factory))),
        5000
      )
      dispatch(tickTimer(timer))
    }
  }
}

export const SET_TICK_TIMER = 'SET_TICK_TIMER'
export const tickTimer = timer => {
  return {
    type: SET_TICK_TIMER,
    timer: timer
  }
}

const findMachines = (factory, machineType) => {
  return Object.keys(factory)
    .map(row => {
      return Object.keys(factory[row])
        .filter(col => isOfType(factory[row][col], machineType))
        .map(col => {
          return { y: row, x: col }
        })
    })
    .flat()
}
const findMachinesToTick = factory => {
  const starters = findMachines(factory, STARTER_MACHINE)
  const transporters = findMachines(factory, TRANSPORTER_MACHINE)
  const furnaces = findMachines(factory, FURNACE_MACHINE)
  const sellers = findMachines(factory, SELLER_MACHINE)
  return [...sellers, ...furnaces, ...transporters, ...starters]
}

const doTick = machines => {
  return {
    type: TICK,
    machines: machines
  }
}
