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




function App(): JSX.Element {
  
  return (
    <View style = {styles.container}>
      <Navigation/>
      <StatusBar barStyle= 'dark-content' />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
  });

export default App;
