import {
  FACTORY_NAME_CHANGED,
  FACTORY_SIZE_CHANGE,
  CREATE_FACTORY,
  SET_FACTORIES
} from './actions'

const initialState = {
  newFactoryName: undefined,
  newFactorySize: 0,
  factories: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case FACTORY_NAME_CHANGED:
      return { ...state, newFactoryName: action.factoryName }
    case FACTORY_SIZE_CHANGE:
      return { ...state, newFactorySize: action.factorySize }
    case CREATE_FACTORY:
      return initialState
    case SET_FACTORIES:
      return { ...state, factories: action.factories }
    default:
      return state
  }
}
