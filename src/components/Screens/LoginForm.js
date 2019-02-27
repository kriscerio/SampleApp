import React, { Component } from 'react'
import { Text, View, TextInput } from 'react-native'
import Input from './../common/Input'
import Button from './../common/Button'

export class LoginForm extends Component {

  state = {
    username: '',
    password: ''
  }
  handleUsername = (text) => {
    this.setState({ username: text })
  }
  handlePassword = (text) => {
    this.setState({ password: text })
  }
  handleLogin = (username, pass) => {
    alert('Username: ' + username + 'Password: ' + pass)
  }

  render() {
    return (
      <View>
        <Input
          placeholder="Username"
          onChangeText={this.handleUsername}
        />
        <Input
          placeholder="Password"
          secureTextEntry={true}
          onChangeText={this.handlePassword}
        />
        <Button
          title="Login"
          onClick={ () => this.handleLogin(this.state.username, this.state.password)}

        />
      </View>
    )
  }
}

export default LoginForm;
