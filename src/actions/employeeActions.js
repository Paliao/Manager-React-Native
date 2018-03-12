
export const employeeUpdate = ({ prop, value }) => {
  return {
    type: 'EMPLOYEE_UPDATED',
    payload: { prop, value }
  }
}