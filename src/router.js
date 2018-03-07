import React from 'react'
import { Scene, Router, Stack } from 'react-native-router-flux'

import LoginForm from './components/loginForm';

const RouterComponent = () => (
  <Router sceneStyle={{ paddingTop: 25 }} titleStyle={{alignSelf: 'center'}} >
    <Stack key='root'>
      <Scene key='login' component={LoginForm} title='Login'/>
    </Stack>
  </Router>
)

export default RouterComponent