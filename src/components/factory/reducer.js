import {
  ADD_MACHINE,
  MATERIAL_FOR_STARTER,
  ROTATE,
  SET_TICK_TIMER,
  TICK
} from './actions'
import {
  addMachine,
  createFactoryBoard,
  findAndRotateMachine,
  materialTo,
  tick,
  updatePositionWith
} from './factoryLib'
import { activate } from '../machines/machines'

const initialState = createFactoryBoard(5)

export default (state = initialState, action) => {
  switch (action.type) {
    case MATERIAL_FOR_STARTER:
      return updatePositionWith(
        action.position,
        machine => activate(machine),
        materialTo(action.position, action.material, state)
      )
    case ADD_MACHINE:
      return addMachine(action.position, action.machineType, state)
    case ROTATE:
      return findAndRotateMachine(action.position, state)
    case TICK:
      return tick(action.machines, state)
    case SET_TICK_TIMER:
      return { ...state, timer: action.timer }
    default:
      return state
  }
}
