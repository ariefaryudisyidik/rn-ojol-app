import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {LogBox, StyleSheet} from 'react-native';
import Router from './router';

LogBox.ignoreLogs(['Remote debugger']);

const App = () => {
  return (
    <NavigationContainer>
      <Router />
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});

export default App;
