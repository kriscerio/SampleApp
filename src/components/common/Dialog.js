import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import Modal from 'react-native-modal';

const Dialog = (props) => {

  const { viewStyle, containerStyle, headerTextStyle, brStyle } = styles;

  return (
    <View >
      <Modal isVisible={props.isVisible}
        onBackdropPress={props.onBackdropPress}>
        <View style={viewStyle}>
          <Text style={headerTextStyle}>Modal Content</Text>
          <View style={brStyle} />
          <TouchableOpacity >
            <Text>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
               Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it to make a type
                 specimen book. It has survived not only five centuries</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  )
}

const styles = {
  viewStyle: {
    backgroundColor: '#ffffff',
    borderRadius: 5,
    borderColor: '#ffffff',
    borderWidth: 5,
    alignItems: 'stretch',
    justifyContent: 'stretch',
  },
  headerTextStyle: {
    alignSelf: 'center',
    fontSize: 20
  }
  , brStyle: {
    alignItems: 'stretch',
    height: 1,
    backgroundColor: '#e9e9e9'
  }
}

export default Dialog;