import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, createElement, Image, SafeAreaView, TouchableOpacity, TouchableHighlight } from 'react-native';
 
 
export default function primeira() {
  const [textoImagem, setTextoImagem,] = useState("");
  

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

      <Button title = 'Next'
      style={styles.tecla}/>
      
      <StatusBar style="auto" />

      <TouchableHighlight onPress={() => setTextoImagem("Meu nome é Gabriela, tenho 17 anos, Sou do curso de Estradas e tenho interesse pela área de Tecnologia,Inovação e empreendedorismo.")}>
        <Image source={require('./assets/Fotogabi.png')}/>
      </TouchableHighlight>

      <Text>{textoImagem}
      
      </Text>
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
