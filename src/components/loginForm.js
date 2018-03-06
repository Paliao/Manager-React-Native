import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { emailChanged, passwordChanged, loginUser } from '../actions'
import { Card, CardSection, Field, Button, ErrorMessage, Spinner } from './common'

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

  spinnerOrButton() {
    if(this.props.loading) {
      return <Spinner />
    }

    return (
      <Button
        text='Login'
        onPress={this.logInPress.bind(this)}
      />
    )
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

        <CardSection>
          {this.spinnerOrButton()}
        </CardSection>
      </Card>
    )
  }
}

const mapStateToProps = state => ({ 
  email: state.auth.email,
  password: state.auth.password,
  error: state.auth.error,
  loading: state.auth.loading
})

const mapDispatchToProps = dispatch => bindActionCreators({
  emailChanged, passwordChanged, loginUser
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)