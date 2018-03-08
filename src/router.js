import React from 'react'
import { Scene, Router, Stack } from 'react-native-router-flux'

import LoginForm from './components/loginForm'
import EmployeeList from './components/employeeList'

const RouterComponent = () => (
  <Router sceneStyle={{ paddingTop: 12 }} titleStyle={{ alignSelf: 'center' }} >
    <Stack key='root' hideNavBar={true}>
      <Scene key='auth' >
        <Scene key='login' component={LoginForm} hideNavBar={false} title='Login'/>
      </Scene>
      
      <Scene key='main'>
        <Scene key='employeeList' component={EmployeeList} hideNavBar={false} title='Employee'/>
      </Scene>
    </Stack>
  </Router>
)

export default RouterComponent