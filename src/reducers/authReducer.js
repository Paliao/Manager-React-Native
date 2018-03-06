const INITIAL_STATE = {
  email: '',
  password: '',
  user: null,
  error: ''
}

export default (state = INITIAL_STATE, action) => {
  console.log(action)
  switch(action.type) {
    case 'EMAIL_CHANGED':
      return { ...state, email: action.payload }
    case 'PASSWORD_CHANGED':
      return { ...state, password: action.payload }
    case 'USER_LOGGED':
      return { ...state, user: action.payload }
    case 'LOGIN_USER_FAIL':
      return { ...state, error: action.payload }
    default: 
      return state
  }
}