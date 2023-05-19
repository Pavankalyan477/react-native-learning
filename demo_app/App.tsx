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
import LandingPage from './src/screens/LandingPage';



function App(): JSX.Element {
  
  return (
    <View style = {styles.container}>
      <LandingPage/>
      <StatusBar />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
  });

export default App;
