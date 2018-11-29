
import React from 'react';
import { View, Text } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import  HomeScreen  from './HomeScreen';
import  LoginScreen from './LoginScreen'

const App = createStackNavigator({
  
  Login: {
    screen: LoginScreen
  },
  Home: {
    screen: HomeScreen
  },
});

export default createAppContainer(App);