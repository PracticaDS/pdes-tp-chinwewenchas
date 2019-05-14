import { OPEN_RAW_MATERIAL } from './actions'

const initialState = {
  selected: undefined
}

export default (state = initialState, action) => {
  switch (action.type) {
    case OPEN_RAW_MATERIAL:
      return { ...state, selected: action.starterId }
    default:
      return state
  }
}
