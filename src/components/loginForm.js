import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { emailChanged, passwordChanged } from '../actions'
import { Card, CardSection, Field, Button } from './common'

class LoginForm extends Component {

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
        <Button text='Login'/>
      </Card>
    )
  }
}

const mapStateToProps = state => ({ 
  email: state.auth.email,
  password: state.auth.password
})
const mapDispatchToProps = dispatch => bindActionCreators({ emailChanged, passwordChanged }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)