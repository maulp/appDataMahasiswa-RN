import * as React from 'react';
import {View, Text} from 'react-native';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Tambah from './Tambah';
import Lihat from './Lihat';
import Update from './Update';
import Detail from './Detail';
import Dashboard from './Dashboard';
import SplashScreen from './SplashScreen';

const Stack = createNativeStackNavigator();

function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name='SplashScreen' component={SplashScreen} options={{headerShown:false}}></Stack.Screen>
        <Stack.Screen name='Dashboard' component={Dashboard}></Stack.Screen>
        <Stack.Screen name='Tambah' component={Tambah}></Stack.Screen>
        <Stack.Screen name='Lihat' component={Lihat}></Stack.Screen>
        <Stack.Screen name='Update' component={Update}></Stack.Screen>
        <Stack.Screen name='Detail' component={Detail}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;