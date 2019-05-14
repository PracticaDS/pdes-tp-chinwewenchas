import { TOGGLE_RAW_MATERIAL_POPUP } from './actions'

const initialState = {
  visible: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_RAW_MATERIAL_POPUP:
      return { ...state, visible: !state.visible }
    default:
      return state
  }
}
