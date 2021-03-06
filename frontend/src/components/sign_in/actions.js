import { setFactories } from '../factory_selector/actions'
import { api } from '../../api'

export const ENTERED_USER_CHANGE = 'ENTERED_USER_CHANGE'
export const enteredUserChange = newEnteredUser => {
  return {
    type: ENTERED_USER_CHANGE,
    enteredUser: newEnteredUser
  }
}

export const SIGN_IN = 'SIGN_IN'
export const signIn = () => {
  return (dispatch, getState) => {
    const user = getState().signIn.enteredUser
    fetch(api.signIn, {
      method: 'POST',
      body: JSON.stringify({ user: user }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(_ => dispatch(signInAction()))
      .then(_ => {
        return fetch(api.userFactories(user))
      })
      .then(res => res.json())
      .then(factories => dispatch(setFactories(factories)))
  }
}

export const signInAction = () => {
  return {
    type: SIGN_IN
  }
}
