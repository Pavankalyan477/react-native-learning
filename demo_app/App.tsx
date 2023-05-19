/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import Navigation from './src/Navigation';
import { Provider } from 'react-redux';
import { store } from './src/store';




function App(): JSX.Element {
  
  return (
    <Provider store={store}>
    <View style = {styles.container}>
      <Navigation/>
      <StatusBar barStyle= 'dark-content' />
    </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
  });

export default App;
