import {SafeAreaView, } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from './screens/Home';
import Segunda from './screens/Segunda';
import Terceira from './screens/Terceira';
import Quarta from './screens/Quarta';
import Quinta from './screens/Quinta';


const Stack = createStackNavigator();

export default function App(){
  return(
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Segunda" component={Segunda} />
      <Stack.Screen name="Terceira" component={Terceira} />
      <Stack.Screen name="Quarta" component={Quarta} />
      <Stack.Screen name="Quinta" component={Quinta} />
    </Stack.Navigator>
    </NavigationContainer>
  );
 }

