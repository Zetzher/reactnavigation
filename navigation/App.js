/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { StyleSheet,  ScrollView,  View,  Text } from 'react-native';
import 'react-native-gesture-handler';

//React Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Inicio from './views/Inicio';
import Nosotros from './views/Nosotros';

const Stack = createStackNavigator();
//Navegación de tipo stack
const App = () => {
  return (
    <>
      <NavigationContainer>

        <Stack.Navigator
        initialRouteName="Inicio"
        screenOptions={{
              title: 'Componente Principal',
              headerStyle: {
                backgroundColor: '#F4511E'
              },
              headerTintColor: '#FFF',
              headerTitleStyle: {
                fontWeight: 'bold'
              },
              headerTitleAlign: 'center'
        }}
        >
          <Stack.Screen
            name="Inicio"
            component={Inicio}
            
          />
          <Stack.Screen
            name="Nosotros"
            component={Nosotros}
            options={ ({route}) => ({
              
              title: route.params.clientId
            
            })}
          />
        </Stack.Navigator>

      </NavigationContainer>
    </>
  );
};

const styles = StyleSheet.create({
  
});

export default App;
