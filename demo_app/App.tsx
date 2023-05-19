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
import ProductDetails from './src/screens/productDetails';



function App(): JSX.Element {
  
  return (
    <View style = {styles.container}>
      {/* <LandingPage/> */}
      <ProductDetails/>
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
