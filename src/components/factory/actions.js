import {
  isOfType,
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
  return [...transporters, ...starters]
}

const doTick = machines => {
  return {
    type: TICK,
    machines: machines
  }
}
