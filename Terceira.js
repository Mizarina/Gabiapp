import { View, Text, StyleSheet, Button} from 'react-native'
import React from 'react';




export default function Terceira({navigation}) {
 
  return (
    
    <View style={styles.container}>
     
     
     <Text style={{ color :'black',
             fontSize: 20,
            fontStyle: 'font-style: obliquo',
            fontWeight: 'bold',
            fontFamily: 'Georgia',
            textAlign: 'center',
            margin: 10


            }}>  VIDA ACADÊMICA </Text>

            
     
     
      <View style={{  backgroundColor: '#FFF8DC', margin: 10, width:'314px'
      , height: '100px', justifyContent: 'center', 
       }}> 

        <Text style={{color: 'black',
             fontSize: 13,
            fontStyle: 'font-style: obliquo',
            fontFamily: 'Georgia',
            textAlign: 'center',
            textBreakStrategy: 'simple',
           
            }}> 
            Já estudei no SESI no fundamental 1 e estudava no colégio Isaac Newton lá na serraria, fiz meu fundamental 2 completo e em 2021 ingressei no ifal.
            
            
            </Text>


       </View>
      
      
      <View style={{  backgroundColor: '#FFF8DC', margin: 10, width:'314px',height: '100px',justifyContent: 'center'  }} >

         <Text style={{color: 'black',
             fontSize: 13,
            fontStyle: 'font-style: obliquo',
            fontFamily: 'Georgia',
            textAlign: 'center',
            textBreakStrategy: 'simple',
           
            }}>  
        Ao ingressar no ifal participei da OALQ (Olimpiada Alagoana de Quimica) e ganhei Menção Honrosa, no inicio de 2022 comecei a participar do Desafio inspiratech do Sebrae onde ficamos na colocação 50 do Nacional.</Text>

       </View>

      <View style={{  backgroundColor: '#FFF8DC' , margin: 10, width:'323px',height: '100px', justifyContent: 'center', }} >

          <Text style={{color: 'black',
             fontSize: 13,
            fontStyle: 'font-style: obliquo',
            fontFamily: 'Georgia',
            textAlign: 'center',
            textBreakStrategy: 'simple',
           
            }}> 

        Em Agosto, participei do Hackhaton Pilar startup challenge que aconteceu durante o evento do Trakto show e partcipei junto com meus amigos e professores do IFAL, participando desses Desafios foi que percebi a necessidade de aprender Programação e iniciei o curso de React Native. </Text>


          </View>


    <View style={{marginLeft: 250}}>
    
    <Button title="Next" 
          color = '#F4A460'
        justifyContent= 'space-between'
        flexDirection= 'row'
        onPress={() => navigation.navigate('Quarta')} />

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


