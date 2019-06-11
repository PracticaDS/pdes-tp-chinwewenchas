import {
  FACTORY_NAME_CHANGED,
  FACTORY_SIZE_CHANGE,
  CREATE_FACTORY
} from './actions'

const initialState = {
  newFactoryName: undefined,
  newFactorySize: 0
}

export default (state = initialState, action) => {
  switch (action.type) {
    case FACTORY_NAME_CHANGED:
      return { ...state, newFactoryName: action.factoryName }
    case FACTORY_SIZE_CHANGE:
      return { ...state, newFactorySize: action.factorySize }
    case CREATE_FACTORY:
      return initialState
    default:
      return state
  }
}
