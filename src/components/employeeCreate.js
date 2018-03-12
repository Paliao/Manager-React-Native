import React, { Component } from 'react'
import { View, Text, Picker, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { Card, CardSection, Field, Button } from './common'
import { employeeUpdate, employeeCreate } from '../actions/employeeActions'

class EmployeeCreate extends Component {

  onButtonPress() {
    const { name, phone, shift } = this.props

    this.props.employeeCreate({ name, phone, shift: shift || 'Monday' })
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Field
             label='Name'
             placeholder='John'
             value={this.props.name}
             onChangeText={value => this.props.employeeUpdate({ prop: 'name', value })}
          />
        </CardSection>

        <CardSection>
          <Field
              label='Number'
              placeholder='3333-3333'
              value={this.props.phone}
              onChangeText={value => this.props.employeeUpdate({ prop: 'phone', value })}
          />
        </CardSection>

        <CardSection style={{ flexDirection: 'column' }}>
          <Text style={styles.pickerTextStyle}>Shift</Text>
          <Picker
            selectedValue={this.props.shift}
            onValueChange={value => this.props.employeeUpdate({ prop: 'shift', value })}
          >
            <Picker.Item label='Monday' value='Monday' />
            <Picker.Item label='Tuesday' value='Tuesday' />
            <Picker.Item label='Wednesday' value='Wednesday' />
            <Picker.Item label='Thursday' value='Thursday' />
            <Picker.Item label='Friday' value='Friday' />
            <Picker.Item label='Saturday' value='Saturday' />
            <Picker.Item label='Sunday' value='Sunday' />
          </Picker>
        </CardSection>

        <CardSection>
          <Button
            text='Create'
            onPress={this.onButtonPress.bind(this)}
          />
        </CardSection>
      </Card>
    )
  }
}

const styles = StyleSheet.create({
  pickerTextStyle: {
    fontSize: 18,
    paddingLeft: 20
  }
})

const mapStateToProps = state => {
  return { name, phone, shift } = state.employee
}

const mapDispatchToProps = dispatch => bindActionCreators({ employeeUpdate, employeeCreate }, dispatch)

export default connect( mapStateToProps, mapDispatchToProps )(EmployeeCreate)