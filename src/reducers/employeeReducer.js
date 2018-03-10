const INITIAL_STATE = {
  name: '',
  phone: '',
  shift: ''
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'EMPLOYEE_UPDATED':
      return { ...state,  }
    default:
      return state
  }
}