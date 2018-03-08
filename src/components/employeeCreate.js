import React, { Component } from 'react'
import { View, Text } from 'react-native'

import { Card, CardSection, Field, Button } from './common'

class EmployeeCreate extends Component {
  render() {
    return (
      <Card>
        <CardSection>
          <Field
            label='Name'
            placeholder='John'
          />
        </CardSection>

        <CardSection>
          <Field
              label='Number'
              placeholder='3333-3333'
          />
        </CardSection>

        <CardSection>
        </CardSection>

        <CardSection>
          <Button
            text='Create'
          />
        </CardSection>
      </Card>
    )
  }
}

export default EmployeeCreate