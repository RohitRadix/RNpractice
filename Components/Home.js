import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'

const Home = ({ navigation }) => {
  const onPressHandller = () => {
    navigation.navigate('Second')
  }
  return (
    <View style={styles.body}>
      <Text style={styles.text}>Home</Text>
      <Pressable onPress={onPressHandller}
        style={({ pressed }) => ({ backgroundColor: pressed ? '#fff' : '#fcc' })} ><Text style={styles.text}>Goto Second Screen</Text></Pressable>
    </View>
  )
}

export default Home
const styles = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 25,
    margin: 10,
    color: 'black'
  },
})