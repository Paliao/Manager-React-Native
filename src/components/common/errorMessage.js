import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const ErrorMessage = props => (
  <View style={styles.errorContainer}>
    <Text style={styles.errorTextStyle}>
      {props.error}
    </Text>
  </View>
)

const styles = StyleSheet.create({
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  },
  errorContainer: {
    backgroundColor: 'white'
  }
})

export { ErrorMessage }