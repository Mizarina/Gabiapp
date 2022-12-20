import { StatusBar } from 'expo-status-bar';
import React,  {useState} from 'react';
import { StyleSheet, Text, View, Button, createElement, Image, SafeAreaView, TouchableOpacity, TouchableHighlight } from 'react-native';

 
export default function Home({navigation}) {
  const [textoImagem, setTextoImagem,] = useState("");
  
    return (
      <View style={styles.container}>

       <View
       style={{  backgroundColor: '#F4A460', margin: 10, width:'300px'
      , height: '40px',justifyContent: 'center', borderRadius: 50
       }}>
       
       <Text style={{ color :'white',
            fontSize: 30,
            fontStyle: 'font-style: obliquo',
            fontWeight: 'bold',
            fontFamily: 'Georgia',
            textAlign: 'center',
            overflow: "hidden",
            borderRadius: 60,
            margin: 5


            }}> 
        Welcome   
        <StatusBar style="auto" />
      </Text>
       
       
       
       
       
       
       
       </View>


      
      
  

      <TouchableHighlight onPress={() => setTextoImagem("Meu nome é Gabriela, tenho 17 anos, Sou do curso de Estradas e tenho interesse pela área de Tecnologia,Inovação e empreendedorismo.")}>
      

        <View>
       <Image source= {require('../assets/Fotogabi.png.png')}
        style= {
          {widht: '150px', 
          height: '150px',
          alignItems: 'center', 
          justifyContent: 'center', 
          borderRadius: 800,
          resizeMode: 'contain',
          margin: 10
        }}
        
        />


<Text style={{ color :'black',
            fontSize: 25,
            fontStyle: 'font-style: obliquo',
            fontWeight: 'bold',
            fontFamily: 'FreeMono',
            textAlign: 'center',
            overflow: "hidden",
            borderRadius: 60,
            margin: 5


            }}> 
        GABI    
        <StatusBar style="auto" />
      </Text>

        </View>
      
      </TouchableHighlight>

      <Text>{textoImagem}
      
      </Text>
  
   
     <View style={{marginLeft: 250}}>

      <Button
        title="Next"
        color = '#F4A460'
       
        
        

        onPress={() => navigation.navigate('Segunda')}
         />
        </View>
         

        </View>

    );


}
  
  

 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF8DC',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5

  }
})


  
