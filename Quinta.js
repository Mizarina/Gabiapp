import React, {useState, useRef, useEffect} from 'react';
import {Text, View, StatusBar,StyleSheet,Animated, Image,Button} from 'react-native';



export default function Quinta({navigation}) {

  const [largura,setLargura] = useState (new Animated.Value(0));
  const [altura,setAltura] = useState (new Animated.Value(30))
  state = { height: new Animated.Value(0) };

  const fadeAnim = useRef(new Animated.Value(0)).current  // Initial value for opacity: 0
  const zoomIn = useRef(new Animated.Value(0)).current

  useEffect(() => {
    Animated.timing(
      fadeAnim,
      {
        toValue: 1,
        duration: 3000,
      }

    ).start();
    
  }, [fadeAnim])

    
    return(
        <View style ={styles.container}>
        <Animated.View style={{
          
          opacity: fadeAnim,

        }}>
          <Image source={require('../assets/flork-gif.gif')}
          style={{
            width: "250px",
            height: "250px",
            }}
          />
           </Animated.View>
          
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
        THE END   
        <StatusBar style="auto" />
      </Text>
       
       
       
       
       
       
       
       </View>

          

        </View>
    )

    
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF8DC',
    alignItems: 'center',
    justifyContent: 'center',

  }
})
