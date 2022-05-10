import React, { useState } from 'react';

import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  RefreshControl, TextInput
} from 'react-native';
//Using List ScrollView and Seeing how to ctrl refresh
const App = () => {

  const [name, setName] = useState('')
  const [age, setAge] = useState()
  return (
    <View style={styles.body}>
      <Text style={styles.text}>Enter your name</Text>
      <TextInput
        style={styles.input}
        placeholder='e.g. Rohit'
        onChangeText={(value) => { setName(value) }}
      />
      <Text style={styles.text}>Enter your age</Text>
      <TextInput
        keyboardType='numeric'
        style={styles.input}
        placeholder='e.g. 20'
        // secureTextEntry //for password fields
        onChangeText={(val) => {
          setAge(val)
        }}
      />
      {/* This statement will only appear when age is not null */}
      {
        age != null &&
        <Text style={styles.subText}>Your name is {name} and you are {age} years old </Text>
      }

    </View>


  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center'


  },
  text: {
    fontSize: 25,
    margin: 10

  },
  subText: {
    fontSize: 15,
    margin: 10,
    textAlign: 'center'

  },
  input: {
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 5,
    width: 260,
    fontSize: 20,
    textAlign: 'center'
  }


});

export default App;
