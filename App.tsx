import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import MainTab from './src/navigators/MainTab';
import { StatusBar } from 'expo-status-bar';
export default function App() {
  return (

    <NavigationContainer>
       <StatusBar style="light" backgroundColor='#009961' />
      <MainTab/>
    </NavigationContainer>
  );
}
