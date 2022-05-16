import React, { useState } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
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
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwsome5 from 'react-native-vector-icons/FontAwesome5';

const App = () => {
  const Drawer = createDrawerNavigator();

  return (
    <NavigationContainer>
      <Drawer.Navigator

      >

        <Drawer.Screen
          name='Home'
          component={Home}
          // Disables header
          options={{ headerShown: false }}
        />
        <Drawer.Screen
          name='Second'
          component={Second}
          // Another way of disabling header
          options={{ header: () => null }}
        />
      </Drawer.Navigator>
    </NavigationContainer >
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
