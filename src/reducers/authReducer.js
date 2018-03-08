const INITIAL_STATE = {
  email: '',
  password: '',
  user: null,
  error: '',
  loading: false
}

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case 'EMAIL_CHANGED':
      return { ...state, email: action.payload }
    case 'PASSWORD_CHANGED':
      return { ...state, password: action.payload }
    case 'LOGIN_USER': 
      return { ...state, loading: true, error: '' }
    case 'USER_LOGGED':
      return { ...state, ...INITIAL_STATE ,user: action.payload }
    case 'LOGIN_USER_FAIL':
      return { ...state, error: action.payload, password: '', loading: false }
    default: 
      return state
  }
}