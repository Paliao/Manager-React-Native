const firebase = require('firebase')

export const employeeUpdate = ({ prop, value }) => {
  return {
    type: 'EMPLOYEE_UPDATED',
    payload: { prop, value }
  }
}

export const employeeCreate = ({ name, phone, shift }) => {
  const { currentUser } = firebase.auth()

  firebase.database().ref(`/users/${ currentUser.uid }/employees`)
    .push({ name, phone, shift })
}