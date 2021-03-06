const INITIAL_STATE = {
  name: '',
  phone: '',
  shift: ''
}

export default (state = INITIAL_STATE, action) => {
  console.log(action)
  switch (action.type) {
    case 'EMPLOYEE_UPDATED':
      return { ...state,  [action.payload.prop]: action.payload.value }
    case 'CLEAR_CREATE_FORM':
      return INITIAL_STATE
    default:
      return state
  }
}