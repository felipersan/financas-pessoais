import React from 'react';
import {View, Text, StatusBar} from 'react-native';
import 'react-native-gesture-handler';
import firebase from './src/services/firebaseConnection';
import {NavigationContainer} from '@react-navigation/native';
import Routes from './src/routes';
import AuthProvider from './src/contexts/auth';

console.disableYellowBox = true;

export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <StatusBar
          backgroundColor={'transparent'}
          barStyle={'dark-content'}
          translucent={true}
        />
        <Routes />
      </AuthProvider>
    </NavigationContainer>
  );
}
