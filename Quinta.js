import React from 'react';
import {Text, View, StatusBar,StyleSheet,Animated} from 'react-native';
import Image from './assets/flork.gif'

export default function Quinta() {

  const [largura,setLargura] = useState (new Animated.Value(0));
  const [altura,setAltura] = useState (new Animated.Value(30))

  Animated.sequence([
    Animated.timing(
      largura,
      {
        toValue:420,
        duration:2000
      }
    ),
    Animated.timing(
      altura,
      {
        toValue:500,
        duration:1000,
      }

    )

  ]).start();
  
    
    return(
        <View style ={styles.container}>
        <Animated.View style={{
          width: 370,
          height: 30,
          backgroundColor: "black"
        }}>
           </Animated.View>
           <Image> source = require{('./assets/flork.gif')} style{{ widht: 200, height: 50}}</Image>

        </View>
    )

    
}
