import 'react-native-gesture-handler';
import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './src/pages/home';
import Details from './src/pages/details';
import NewOng from './src/pages/new-ong';
import ListOngs from './src/pages/list-ongs';
import Edit from './src/pages/edit';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTintColor: '#321D5F'
        }}>
        <Stack.Screen name="home" options={{ title: 'Home' }} component={Home} />
        <Stack.Screen name="update" options={{ title: 'Editar ONG' }} component={Edit} />
        <Stack.Screen name="newOng" options={{ title: 'Adicionar ONG' }} component={NewOng} />
        <Stack.Screen name="listAll" options={{ title: 'Lista de ONGS' }} component={ListOngs} />
        <Stack.Screen name="details" options={{ title: 'Detalhe' }} component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;