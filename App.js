import React, { useState } from 'react';

import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  RefreshControl,
  TextInput,
  Button,
  TouchableOpacity,
  TouchableHighlight
} from 'react-native';
//Using List ScrollView and Seeing how to ctrl refresh
const App = () => {

  const [name, setName] = useState('')
  const [age, setAge] = useState()
  let [submitted, setSubmitted] = useState(false)
  //Logic to toggle submitted props
  const submit = () => {
    setSubmitted(!submitted)

  }
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
      {/* Button title will change acc. to the state  */}
      <Button title={submitted ? 'Clear' : 'Submit'}
        onPress={submit}
        // The button will be disabled after it is clicked
        // disabled={submitted}
        color='#000'
      />

      {/* Since Button has very limited props we eill use othe alt  */}
      <TouchableOpacity
        style={styles.button}
        onPress={submit}
      >
        <Text style={styles.subText}>{submitted ? 'Touchable Clear' : 'Touchable Submit'}</Text>
      </TouchableOpacity>

      {/* We will use touchable heighlight as we can give a color when it is clicked */}
      <TouchableHighlight
        style={styles.button}
        onPress={submit}
        //This color is shown when button is clicked
        underlayColor='#fcf'
      >
        <Text style={styles.subText}>{submitted ? 'TouchableHighlight Clear' : 'TouchableHighlight Submit'}</Text>
      </TouchableHighlight>


      {/* This statement will only appear when button is pressed */}
      {
        submitted === true &&
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
    textAlign: 'center',
    marginBottom: 26,

  },
  button: {
    backgroundColor: 'grey',
    borderColor: 'black',
    borderRadius: 5,
    marginTop: 20,
  },


});

export default App;
