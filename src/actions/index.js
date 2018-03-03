export function emailChanged(text) {
  return {
    type: 'EMAIL_CHANGED',
    payload: text
  }
}