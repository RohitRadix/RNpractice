import React, { useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Image, ImageBackground
} from 'react-native';
import CustomButton from './Components/CustomButton';
import Home from './Components/Home';
import Second from './Components/Second';

const App = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
      // this diables the back button on the navigation bar for all screen
      // screenOptions={{
      //   header: () => null
      // }}
      >
        <Stack.Screen
          name='Home'
          component={Home}
          // Disables header
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='Second'
          component={Second}
          // Another way of disabling header
          options={{ header: () => null }}
        />
      </Stack.Navigator>
    </NavigationContainer>
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

});

export default App;
