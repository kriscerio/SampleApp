import React, { Component } from 'react'
import { Text, View, TextInput } from 'react-native'
import Button from './Button';

const Input = ({ placeholder, secureTextEntry, onChangeText }) => {
  return (
    <View style={styles.containerStyle}>
      <TextInput 
        style={styles.textInputStyle}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        onChangeText={onChangeText}
      />
    </View>
  )
}

const styles = {
  textInputStyle: {
    fontSize: 15,
    lineHeight: 23,
    alignSelf:'stretch'
  },
  containerStyle: {
    height: 40,
    width: 250,
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'stretch',
    borderColor: 'black',
    borderWidth: 1,
    paddingLeft: 6,
    paddingRight: 6,
    borderRadius: 5,
    marginBottom: 10
  }
}

export default Input;