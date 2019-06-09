import { ENTERED_USER_CHANGE, SIGN_IN } from './actions'

export const NONE_USER = '__NONE_USER__'
const initialState = {
  user: NONE_USER,
  enteredUser: undefined
}

export default (state = initialState, action) => {
  switch (action.type) {
    case ENTERED_USER_CHANGE:
      return { ...state, enteredUser: action.enteredUser }
    case SIGN_IN:
      return { ...state, user: state.enteredUser, enteredUser: undefined }
    default:
      return state
  }
}
