import React , {useState} from 'react';

import {
  StyleSheet,
  View,
  Text,
  Button,
} from 'react-native';
// Undestanding Styles and styelsSheet
const App = () => {
  const onClickHandler=() =>{
   setName('Styling done ✅')
  }
  // Make a hook and give it a relavent name and default value if required
  const [name, setName]= useState("Style ")
  return (
    // we can write style in line too but its a good practice to define style in Stylesheet 
   <View style={styles.body}>
     <Text style={styles.text}>{name}</Text>
     {/* We cannnot add style to Button directly as it dosent accepts it so we will wrap it in View */}
     <View style={styles.button}>
        <Button color={'#008000'}  onPress={onClickHandler} title='Mark Done'></Button>
     </View>
   </View>
  );
};

const styles = StyleSheet.create({
  body:{
    flex: 1,
    backgroundColor: '#fad6a5',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 5,
    margin:25,
    borderColor:'grey',

    
  },
  text:{
    color:'black',
    fontSize: 40,
    fontStyle:'italic',
    fontWeight:'600',
    margin: 10,
  },
  // cannot do much directly to Button instead we will use TouchableOpacity etc in later stages
  button:{
    width: 250,
    height: 60
    
  }
});

export default App;
