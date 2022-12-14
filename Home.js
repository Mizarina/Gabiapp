import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, createElement, Image, SafeAreaView, TouchableOpacity, TouchableHighlight } from 'react-native';
import Image from './assets/Fotogabi.png'
 
 
export default function Home() {
  const [textoImagem, setTextoImagem,] = UseState("");
  
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
          source= {require('./assets/Fotogabi.png')}
          style= {styles.fotobuttongabi}
        </Image>
      </TouchableOpacity>


      
 <StatusBar style="auto" />

      <TouchableHighlight onPress={() => setTextoImagem("Meu nome é Gabriela, tenho 17 anos, Sou do curso de Estradas e tenho interesse pela área de Tecnologia,Inovação e empreendedorismo.")}>
        <Image> source={require('./assets/Fotogabi.png')}</Image>
      </TouchableHighlight>

      <Text>{textoImagem}
      
      </Text>

      <Button
        title="Next"
        onPress={() => navigation.navigate('Segunda')} />

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

  

  
  

  
