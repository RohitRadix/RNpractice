import React, { useState } from 'react';

import {
  StyleSheet,
  View,
  Text,
  Button,
} from 'react-native';
// Undestanding Responsive UI and flexbox
const App = () => {
  return (
    <View style={styles.body}>
      <View style={styles.view1}>
        <Text style={styles.text}>1</Text>
      </View>
      <View style={styles.view2}>
        <Text style={styles.text}>2</Text>
      </View>
      <View style={styles.view3}>
        <Text style={styles.text}>3</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    // Flex 1 spreads the view to whole area
    flex: 1,
    // Default flex direction is col
    // flexDirection:"column",
    // flex direction is col reverse , it reverses the order of items
    // flexDirection:"column-reverse",
    // flex direction set to row 
    // flexDirection:"row",
    // flex direction set to row reverse
    // flexDirection:"row-reverse",
    alignItems: 'stretch',
    justifyContent: 'center',
    // borderWidth: 5,
    // borderColor: 'grey',


  },
  text: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'black'
  },
  view1: {

    // width: 100,
    // height: 100,
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fad6a5',
  },
  view2: {
    flex: 2,
    // width: 100,
    // height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#faa6a5',
  },
  view3: {
    flex:1,
    // width: 100,
    // height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#faf6a5',
  }
});

export default App;
