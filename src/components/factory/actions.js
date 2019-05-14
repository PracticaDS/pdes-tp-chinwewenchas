import { isNoneMachine } from '../machines/machines'

export const MATERIAL_FOR_STARTER = 'MATERIAL_FOR_STARTER'
export const materialForStarter = (id, material) => {
  return {
    type: MATERIAL_FOR_STARTER,
    id,
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

export const MATERIAL_TO = 'MATERIAL_TO'
export const materialTo = (direction, material) => {
  return {
    type: MATERIAL_TO,
    direction,
    material: material
  }
}

export const TICK = 'TICK'
export const tick = () => {
  return (dispatch, getState) => {
    if (!getState().factory.timer) {
      let timer = setInterval(
        () => dispatch(doTick(findMachinesToTick(getState().factory))),
        10000
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

const findMachinesToTick = state => {
  return Object.keys(state)
    .map(row => {
      return Object.keys(state[row])
        .filter(col => !isNoneMachine(state[row][col]))
        .map(col => {
          return { y: row, x: col }
        })
    })
    .flat()
}

const doTick = machines => {
  return {
    type: TICK,
    machines: machines
  }
}
