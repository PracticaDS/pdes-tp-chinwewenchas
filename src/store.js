import { compose, createStore } from 'redux'
import { rootReducer } from './rootReducer'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
export const storeInstance = createStore(
  rootReducer,
  undefined,
  composeEnhancers()
)
