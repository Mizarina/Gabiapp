import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import { Button, Input, Text } from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Home'
import Segunda from './screens/Segunda'
import { StackNavigator} from 'react-navigation';
import Terceira from './screens/Terceira'
import Quarta from './screens/Quarta'
import Quinta from './screens/Quinta'



 const Stack=[createNativeStackNavigatior()] 
 
 function App(){
  return(
    <NavigationContainer>
    <Stack.Navigatior>
      <Stack.Screen name="Home"component={Home}/>
      <Stack.Screen name= "Segunda" component={Segunda}/>
      <Stack.Screen name= "Terceira" component={Terceira}/>
      <Stack.Screen name= "Quarta" component={Quarta}/>
      <Stack.Screen name= "Quinta" component={Quinta}/>

    </Stack.Navigatior>
    </NavigationContainer>

  )
 }


export default App;
 
