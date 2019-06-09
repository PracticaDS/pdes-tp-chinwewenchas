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
    fetch('http://localhost:3000/sign_in', {
      method: 'POST',
      body: JSON.stringify({ user: getState().signIn.enteredUser }),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(_ => dispatch(signInAction()))
  }
}

export const signInAction = () => {
  return {
    type: SIGN_IN
  }
}
