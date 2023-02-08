import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ListaPokemon from './ListaPokemon';
import Detalle from './Detalle';

function App(){
    const Stack = createNativeStackNavigator();
    return(
      <NavigationContainer>      
        <Stack.Navigator>
            <Stack.Screen name="Inicio" component={ListaPokemon} />
            <Stack.Screen name="Detalle" component={Detalle} />
        </Stack.Navigator>
      </NavigationContainer>
    );
}

export default App;