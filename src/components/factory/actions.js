import {
  FURNACE_MACHINE,
  isOfType,
  SELLER_MACHINE,
  STARTER_MACHINE,
  TRANSPORTER_MACHINE
} from '../machines/machines'
import { ADD_MACHINE_ACTION, REMOVE_MACHINE_ACTION } from './factoryLib'

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

export const REMOVE_MACHINE = 'REMOVE_MACHINE'
const removeMachine = position => {
  return {
    type: REMOVE_MACHINE,
    position: position
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
  const { rows, columns, totalSells, actionSelected, ...board } = factory
  return Object.keys(board)
    .map(row => {
      return Object.keys(board[row])
        .filter(col => isOfType(board[row][col], machineType))
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

export const TOOLBOX_ACTION = 'TOOLBOX_ACTION'
export const selectMachineForAddition = machineType => {
  return {
    type: TOOLBOX_ACTION,
    payload: machineType,
    actionType: ADD_MACHINE_ACTION
  }
}

export const activateMachineRemoval = () => {
  return {
    type: TOOLBOX_ACTION,
    payload: undefined,
    actionType: REMOVE_MACHINE_ACTION
  }
}

export const positionSelected = position => {
  return (dispatch, getState) => {
    const { payload, actionType } = getState().factory.actionSelected
    if (actionType) {
      switch (actionType) {
        case ADD_MACHINE_ACTION:
          if (payload) {
            dispatch(addMachine(position, payload))
          }
          break
        case REMOVE_MACHINE_ACTION:
          dispatch(removeMachine(position))
      }
    }
  }
}
