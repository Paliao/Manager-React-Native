import firebase from 'firebase'
import { Actions } from 'react-native-router-flux'

export const employeeUpdate = ({ prop, value }) => {
  return {
    type: 'EMPLOYEE_UPDATED',
    payload: { prop, value }
  }
}

export const employeeCreate = ({ name, phone, shift }) => {
  return dispatch => {
    const { currentUser } = firebase.auth()
  
    firebase.database().ref(`/users/${ currentUser.uid }/employees`)
      .push({ name, phone, shift })
      .then(() => {
        dispatch({ type: 'CLEAR_CREATE_FORM' })
        Actions.main({ type: 'reset' })
      })
  }
}

export const employeeFetch = () => {
  return dispatch => {
    const { currentUser } = firebase.auth()

    firebase.database().ref(`/users/${ currentUser.uid }/employees`)
      .on('value', snapShot => {
        dispatch({ type: 'EMPLOYEES_FETCHED', payload: snapShot.val() })
      })
  }
}
