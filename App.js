import React, { useState } from 'react';

import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  RefreshControl
} from 'react-native';
//Using List ScrollView and Seeing how to ctrl refresh
const App = () => {


  return (
    <View style={styles.body}>

    </View>

  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#ffffff',

  },
  text: {
    fontSize: 35,
    margin: 10

  },


});

export default App;
