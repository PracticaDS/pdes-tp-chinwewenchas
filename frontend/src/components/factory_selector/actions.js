import { createFactoryBoard } from '../factory/factoryLib'
import { factorySelected } from '../factory/actions'

export const FACTORY_NAME_CHANGED = 'FACTORY_NAME_CHANGED'
export const newFactoryChangeName = newFactoryName => {
  return {
    type: FACTORY_NAME_CHANGED,
    factoryName: newFactoryName
  }
}

export const FACTORY_SIZE_CHANGE = 'FACTORY_SIZE_CHANGE'
export const newFactorySizeChange = newFactorySize => {
  return {
    type: FACTORY_SIZE_CHANGE,
    factorySize: parseInt(newFactorySize, 10)
  }
}

export const CREATE_FACTORY = 'CREATE_FACTORY'
export const createFactory = () => {
  return (dispatch, getState) => {
    fetch('http://localhost:3000/api/new_factory', {
      method: 'POST',
      body: JSON.stringify({
        name: getState().factorySelector.newFactoryName,
        size: getState().factorySelector.newFactorySize,
        board: createFactoryBoard(getState().factorySelector.newFactorySize),
        user: getState().signIn.user
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => {
        return response.json()
      })
      .then(body => {
        dispatch(factorySelected(body[0]))
      })
  }
}
