import { View, Text, StyleSheet, Button} from 'react-native'
import React from 'react';




 export default function Segunda  ({navigation}) {
 
  return (
    
    <View style={styles.container}>
      
       <Text style={{ color :'black',
             fontSize: 20,
            fontStyle: 'font-style: obliquo',
            fontWeight: 'bold',
            fontFamily: 'Georgia',
            textAlign: 'start',
            margin: 10


            }}> 
            
            O QUE EU GOSTO? </Text>
    
  

      <View 
      
      style={{  backgroundColor: '#FFF8DC', margin: 10, width:'323px'
      , height: '100px',justifyContent: 'center',
       }}>

      <Text style={{ color :'black',
             fontSize: 13,
            fontStyle: 'font-style: obliquo',
            fontFamily: 'Georgia',
            textAlign: 'center',
            textBreakStrategy: 'simple',
           
            }}>
            
            
             Eu gosto muito de aventura e de viajar, inclusive uma das minhas metas para o ano que vem é participar de várias trilhas.
            
            </Text>

       </View>
      
      
      <View style={{  backgroundColor: '#FFF8DC', margin: 10, width:'323px',height: '100px', justifyContent: 'center', }}> 
      <Text style={{color: 'black',
             fontSize: 13,
            fontStyle: 'font-style: obliquo',
            fontFamily: 'Georgia',
            textAlign: 'center',
            textBreakStrategy: 'simple',
           
            }}> 
            Gosto também de jogar vôlei, é o meu esporte preferido. 
            
            </Text>

      </View>
    
      
      <View style={{  backgroundColor: '#FFF8DC' , margin: 10, width:'323px',height: '100px', justifyContent: 'center',}}>

      <Text style={{color: 'black',
             fontSize: 13,
            fontStyle: 'font-style: obliquo',
            fontFamily: 'Georgia',
            textAlign: 'center',
            textBreakStrategy: 'simple',
           
            }}> 
            
            Gosto de estar com a minha família, de estudar, assistir séries e filmes, desenhar e de cozinhar.
            </Text>


      </View>
    
    <View style={{marginLeft: 250}}>
    <Button 
          title="Next"
          color = '#F4A460'
        justifyContent= 'space-between'
        flexDirection= 'row'
        onPress={() => navigation.navigate('Terceira')} />
  
    </View>
    </View>
    
  
  );

};





const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5

  }
})



    

