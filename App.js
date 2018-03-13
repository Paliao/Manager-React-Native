import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import firebase from 'firebase'
import thunk from 'redux-thunk'

import Router from './src/router'
import reducers from './src/reducers'

const store = applyMiddleware(thunk)(createStore)(reducers)

export default class App extends Component {

  constructor() {
    super()

    console.ignoredYellowBox = [
      'Setting a timer'
    ]
}

  componentWillMount() {
    firebase.initializeApp({
        apiKey: "AIzaSyCnVsqjhRjHZdEE5EzdZhAY0pqmqYX9C54",
        authDomain: "maneger-2b9ee.firebaseapp.com",
        databaseURL: "https://maneger-2b9ee.firebaseio.com",
        projectId: "maneger-2b9ee",
        storageBucket: "maneger-2b9ee.appspot.com",
        messagingSenderId: "943233819444"
    })
  }

  render(){
    return (
      <Provider store={store}>
        <View style={{flex: 1}}>
          <Router />
        </View>
      </Provider>
    )
  }
}