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
      .then(user => loginUser(dispatch, user) )
      .catch(() => {
        firebase.auth().createUserWithEmailAndPassword( email, password )
          .then( user => loginUser(dispatch, user))
          .catch(() => loginUserFail(dispatch))
      }
    )
  )
}

const loginUserFail = dispatch => {
  dispatch({ type: 'LOGIN_USER_FAIL', payload: 'Authentication failed.' })
}

const userLogged = (dispatch, user) => {
  dispatch({ type: 'USER_LOGGED', payload: user })
}