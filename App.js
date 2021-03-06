import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Button from './src/components/common/Button';
import Dialog from './src/components/common/Dialog';
import LoginForm from './src/components/Screens/LoginForm';

export default class App extends React.Component {
  state = {
    isModalVisible: false,
  };

  toggleModal = () => {
    this.setState({ isModalVisible: !this.state.isModalVisible });
  };

  render() {
    return (
      <View style={styles.container}>
        <LoginForm />
        <Button 
          style={{height: 20,width: 40}}
          title=" !! " 
          onClick={this.toggleModal} />
        <Dialog
          isVisible={this.state.isModalVisible}
          onBackdropPress={this.toggleModal}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
