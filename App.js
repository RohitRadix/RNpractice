import React , {useState} from 'react';

import {
  StyleSheet,
  View,
  Text,
  Button,
} from 'react-native';
// Changing the text dynamically
const App = () => {
  //Made a function that will toggle the name in state
  const onClickHandler=() =>{
    if(name==='Rohit')
    {
      setName('Mohit')
      setStatus(true)
    }
    else 
    {
      setName('Rohit')
      setStatus(false)
    }
  }
  // Make a hook and give it a relavent name and default value if required
  const [name, setName]= useState("Rohit")
  // We can also define states having objects
  const [lesson, setLesson]= useState({ number : 2 , about : "States" })
  // State using boolean value 
  const [status, setStatus] = useState(false)
  return (
   <View style={styles.body}>
     <Text style={styles.text}>My name is: {name}</Text>
     <Text style={styles.text}>This is {lesson.number} topic and it's ablout {lesson.about}</Text>
     {/* Used the boolean value to change styling of the text */}
     <Text style={status? styles.true: styles.false}>"Status" state have boolean value of "{JSON.stringify(status)}" right now</Text>
     <Button  color={'#fec8d8'}  onPress={onClickHandler} title='Update state'></Button>
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
    fontStyle:'italic',
    fontWeight:'600',
  },
  true:{
    fontSize: 18,
    fontWeight: 'bold',
    color:'#008000'
  },
  false:{
    fontSize: 18,
    fontWeight: 'bold',
    color: '#820000'
  }

});

export default App;
