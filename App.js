import React from 'react';
import { Provider } from 'react-redux'
import { createStackNavigator } from 'react-navigation';
import { StyleSheet, Text, View } from 'react-native';
import Home from './components/Home';

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

const RootStack = createStackNavigator({
  Home: {
    screen: Home
  },
});

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <RootStack />
      </Provider>
    );
  }
}

