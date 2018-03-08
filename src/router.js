import React from 'react'
import { Scene, Router, Stack, Actions } from 'react-native-router-flux'

import LoginForm from './components/loginForm'
import EmployeeList from './components/employeeList'
import EmployeeCreate from '../src/components/employeeCreate'

const RouterComponent = () => (
  <Router sceneStyle={{ paddingTop: 12 }} titleStyle={{ alignSelf: 'center' }} >
    <Stack key='root' hideNavBar={true}>
      <Scene key='auth' >
        <Scene key='login' component={LoginForm} hideNavBar={false} title='Login'/>
      </Scene>
      
      <Scene key='main'>
        <Scene
          key='employeeList'
          component={EmployeeList}
          hideNavBar={false}
          title='Employee'
          rightTitle='Add'
          onRight={() => Actions.employeeCreate()}
          rightButtonStyle={{ paddingLeft: 3 }}
          initial
        />
        <Scene key='employeeCreate' component={EmployeeCreate} title='Create Employee'/>
      </Scene>
    </Stack>
  </Router>
)

export default RouterComponent