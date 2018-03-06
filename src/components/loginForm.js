import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { emailChanged, passwordChanged, loginUser } from '../actions'
import { Card, CardSection, Field, Button, ErrorMessage } from './common'

class LoginForm extends Component {

  logInPress() {
    const { email, password } = this.props

    this.props.loginUser({ email, password })
  }

  renderError() {
    if (this.props.error) {
      return (
        <ErrorMessage error={this.props.error} />
      )
    }
  }

  render() {

    return(
      <Card> 
        <CardSection>
          <Field
            label='Email'
            placeholder='email@gmail.com'
            onChangeText={this.props.emailChanged}
            value={this.props.email}
          />
        </CardSection>

        <CardSection>
          <Field
            secureTextEntry
            label='Password'
            placeholder='Password'
            onChangeText={this.props.passwordChanged}
            value={this.props.password}
          />
        </CardSection>

        {this.renderError()}

        <Button
        text='Login'
        onPress={this.logInPress.bind(this)}
        />
      </Card>
    )
  }
}

const mapStateToProps = state => ({ 
  email: state.auth.email,
  password: state.auth.password,
  error: state.auth.error
})

const mapDispatchToProps = dispatch => bindActionCreators({
  emailChanged, passwordChanged, loginUser
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)