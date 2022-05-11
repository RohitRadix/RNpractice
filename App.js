import React, { useState } from 'react';

import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
  TouchableHighlight,
  Alert, ToastAndroid, Modal, Pressable
} from 'react-native';

//Using List ScrollView and Seeing how to ctrl refresh
const App = () => {

  const [name, setName] = useState('')
  const [age, setAge] = useState()
  const [showWarning, setShowWarning] = useState(false)
  let [submitted, setSubmitted] = useState(false)
  //Logic to toggle submitted props
  const submit = () => {
    if (name.length > 3)
      setSubmitted(!submitted)
    else {
      setShowWarning(true)
    }

  }
  return (
    <View style={styles.body}>
      <Modal
        visible={showWarning}
        onRequestClose={() =>
          setShowWarning(false)
        }
        transparent
        animationType='fade'

      >
        <View style={styles.center}>
          <View style={styles.modal_warning}>
            <View style={styles.modal_title}>
              <Text style={styles.subTexttext}>Warning</Text>
            </View>
            <View style={styles.warning_body}>
              <Text>Please enter atleast 3 characters</Text>
            </View>
            <View style={styles.warning_button}>
              <Pressable onPress={() => { setShowWarning(false) }}
                android_ripple={'#fda'}
              >
                <Text>OK</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal >
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
    </View >
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
    margin: 10,
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
  modal_warning: {
    height: 150,
    width: 300,
    backgroundColor: '#ffff',
    borderWidth: 1,
    borderRadius: 10,
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00000090'
  },
  modal_title: {
    backgroundColor: 'yellow',
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center'


  },
  warning_body: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center'
  },
  warning_button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fddd',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,



  }
});

export default App;
