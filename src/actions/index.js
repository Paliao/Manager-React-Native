const firebase = require('firebase')

export function emailChanged(text) {
  return {
    type: 'EMAIL_CHANGED',
    payload: text
  }
}

export function passwordChanged(text) {
  return {
    type: 'PASSWORD_CHANGED',
    payload: text
  }
}

export function loginUser({ email, password }) {
  return dispatch => (
    firebase.auth().signInWithEmailAndPassword( email, password )
      .then(user => {
        dispatch({ type: 'USER_LOGGED', payload: user })
      })
  )
}