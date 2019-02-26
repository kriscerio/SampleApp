import React, { Component } from 'react'
import { Text, View, TextInput } from 'react-native'

export class LoginForm extends Component {
  render() {
    return (
      <View>
        <TextInput 
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          placeholder="Empty Text Input"
        />
      </View>
    )
  }
}

const styles = {

}

export default LoginForm;
