import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

const Button = (props) => {
  const { buttonStyle, buttonTextStyle } = styles;

  return (
    <View style={buttonStyle}>
      <TouchableOpacity onPress={props.onClick}>
        <Text style={buttonTextStyle}>{props.title}</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = {
  buttonStyle: {
    backgroundColor: '#007aff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#007aff',
    marginLeft: 5,
    marginRight: 5,
    marginTop: 5
  },
  buttonTextStyle: {
    alignSelf: 'center',
    justifyContent: 'center',
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold',
    paddingTop: 10,
    paddingBottom: 10
  }
}

export default Button;