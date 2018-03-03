import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Card, CardSection, Field, Button } from './common'

class LoginForm extends Component {

  onEmailChange(text) {

  }

  render() {
    return(
      <Card> 
        <CardSection>
          <Field
            label='Email'
            placeholder='email@gmail.com'
            onChangeText={this.onEmailChange.bind(this)}
          />
        </CardSection>

        <CardSection>
          <Field
            secureTextEntry
            label='Password'
            placeholder='Password'
          />
        </CardSection>
        <Button text='Login'/>
      </Card>
    )
  }
}

export default connect(null, { emailChanged })(LoginForm)