/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */


import React from 'react';

import {
  StyleSheet,
  useColorScheme,
  View,
  Text,
  Button,
  Linking
} from 'react-native';

const App = () => {
  return (
   <View style={styles.body}>
     <Text style={styles.text}>Hello world</Text>
     <Button style={styles.btn_col} onPress={()=>{Linking.openURL('https://www.google.com')}} title='Click me'></Button>
   </View>
  );
};

const styles = StyleSheet.create({
  body:{
    flex: 1,
    backgroundColor: '#967bb6',
    alignItems: 'center',
    justifyContent: 'center'
  },
  text:{
    color:'black',
    fontSize: 25,

  },
  btn_col:{
    backgroundColor: '#ffff',

  }
});

export default App;
