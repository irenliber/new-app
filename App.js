import React from 'react';
import { Provider } from 'react-redux'
import { createStackNavigator } from 'react-navigation';
import { StyleSheet, Text, View } from 'react-native';

import configureStore from './store/configureStore'
const store = configureStore()

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

class HomeScreen extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <Text>Image search</Text>
        </View>
      </Provider>
    );
  }
}

export default createStackNavigator({
  Home: {
    screen: HomeScreen
  },
});
