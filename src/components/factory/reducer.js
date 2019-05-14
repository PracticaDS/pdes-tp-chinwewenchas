import {
  ADD_MACHINE,
  MATERIAL_FOR_STARTER,
  MATERIAL_TO,
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
        action.id,
        machine => activate(machine),
        materialTo(action.id, action.material, state)
      )
    case ADD_MACHINE:
      return addMachine(action.position, action.machineType, state)
    case ROTATE:
      return findAndRotateMachine(action.position, state)
    case TICK:
      return tick(action.machines, state)
    case MATERIAL_TO:
      return materialTo(action.direction, action.material, state)
    case SET_TICK_TIMER:
      return { ...state, timer: action.timer }
    default:
      return state
  }
}
