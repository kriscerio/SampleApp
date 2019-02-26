import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';
import Button from './src/components/common/Button';
import Dialog from './src/components/common/Dialog';

export default class App extends React.Component {

  state = {
    isModalVisible: false,
  };

  toggleModal = () => {
    this.setState({ isModalVisible: !this.state.isModalVisible });
  }

  render() {
    return (
      <View style={styles.container}>
        <Button title=" Toggle Modal "
          onClick={this.toggleModal}
        />
        <Dialog isVisible={this.state.isModalVisible}
        onBackdropPress={this.toggleModal}>

        </Dialog>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
