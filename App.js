import React, { useState } from 'react';

import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
  TouchableHighlight,
  Alert, ToastAndroid, Modal, Pressable, Image, ImageBackground
} from 'react-native';

const App = () => {

  const [name, setName] = useState('')
  const [age, setAge] = useState()
  let [submitted, setSubmitted] = useState(false)
  //Logic to toggle submitted props
  const submit = () => {
    if (name.length > 3)
      setSubmitted(!submitted)
    else {
      setSubmitted(false)
    }

  }
  return (
    <ImageBackground
      style={styles.body}
      source={{ uri: 'https://cdn.pixabay.com/photo/2016/11/05/12/38/fuzzy-1800136_960_720.jpg' }}
    >
      <Text style={styles.text}>Enter your name</Text>
      <TextInput
        style={styles.input}
        placeholder='e.g. Rohit'
        onChangeText={(value) => { setName(value) }}
      />

      {/* Since Button has very limited props we eill use othe alt  */}
      <TouchableOpacity
        style={styles.button}
        onPress={submit}
      >
        <Text style={styles.button_text}>{submitted ? 'Clear' : 'Submit'}</Text>
      </TouchableOpacity>

      {/* This statement will only appear when button is pressed */}
      {
        submitted === true ?
          <>
            <Text style={styles.subText}>You are verified as {name} </Text>
            <Image style={styles.image} source={{ uri: 'https://cdn.pixabay.com/photo/2012/04/18/19/01/check-37583_960_720.png' }} />
          </>
          :
          <>
            <Text style={styles.subText}>Please enter atlest 3 characters</Text>
            <Image style={styles.image} source={require('./assets/oops.png')} />
          </>
      }
    </ImageBackground >
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'


  },
  text: {
    fontSize: 25,
    margin: 10,
    color: 'black'
  },
  subText: {
    fontSize: 15,
    margin: 10,
    textAlign: 'center'

  },
  input: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    width: 260,
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 26,

  },
  button: {
    backgroundColor: '#000',
    borderColor: 'black',
    borderRadius: 5,
    marginTop: 20,
    width: 100
  },
  button_text: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 15,
    margin: 10,
    textAlign: 'center'
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00000090'
  },
  image: {
    height: 100,
    width: 100,
    marginTop: 20,
  },
});

export default App;
