import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {LogBox, StyleSheet} from 'react-native';
import Router from './router';
import {Provider} from 'react-redux';
import {store} from './redux';

LogBox.ignoreLogs(['Remote debugger']);

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Router />
      </NavigationContainer>
    </Provider>
  );
};

const styles = StyleSheet.create({});

export default App;
