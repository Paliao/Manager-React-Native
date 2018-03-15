import { combineReducers } from 'redux'

import AuthReducer from './reducers/authReducer'
import EmployeeReducer from './reducers/employeeFormReducer'

export default combineReducers({
  auth: AuthReducer,
  employee: EmployeeReducer
})