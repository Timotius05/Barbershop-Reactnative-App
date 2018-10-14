import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import home from './component/home';
import login from './component/login';

const AppNavigator = StackNavigator({
  SettingScreen: { screen: login },
  HomeScreen: { screen: home }
});

export default class App extends Component {
  render() {
    return (
      <AppNavigator />
    );
  }
}