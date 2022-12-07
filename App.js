import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, createElement, Image, SafeAreaView, TouchableOpacity } from 'react-native';
 
 
export default function App() {
  const [textoInicial, setTextoInicial,] = useState("");
  
  
  function showText() {

  }

  function setTextoInicial() {
    textoInicial = "Eu sou a gabi!:)";
  }

  return (
      <View style={styles.container}>
        
      <Text style ={{color:"Black", 
        fontSize: 80, 
        margin: 20,}}>
        GABI    
      </Text>

      <TouchableOpacity>
      style= {styles.buttongabi}
        <Image>
          source= {require('Fotogabi.jpg')}
          style= {styles.fotobuttongabi}
        </Image>
      </TouchableOpacity>

      <Button title = 'Next'/>
      style={styles.tecla}/>
      <Image source={require('Fotogabi.jpg')}/>
      style={styles.logo}/>
      <StatusBar style="auto" />

      <TouchableHighlight onPress={() => this.showText()}>
        <Image source={require('Fotogabi.jpg')}/>
      </TouchableHighlight>

      <Text>{textoInicial}</Text>
      </View>
    );
  
  
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',

  },

  logo:{
    alignItems:"stretch"
  }
  
  ,
  tecla:{
  alignItems:"flex-end"
  
  }
  
});

 