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