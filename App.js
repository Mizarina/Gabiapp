import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import { Button, Input, Text } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome'
import styles from './style/MainStyle'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import primeira from './screens/primeira'


 const Stack=[createStackNavigatior()] 
 
 function MyStack(){
  return(
    <Stack.Navigatior>
      <Stack.Screen name="Home"component={Home}/>
      <Stack.Screen name= "Segunda" component={Segunda}/>
      <Stack.Screen name= "Terceira" component={Terceira}/>
      <Stack.Screen name= "Quarta" component={Quarta}/>
      <Stack.Screen name= "Quinta" component={Quinta}/>

    </Stack.Navigatior>



  )
 }




export default function App() {
  
  
}
 
