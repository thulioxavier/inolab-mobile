import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import MainTab from './src/navigators/MainTab';
import { StatusBar } from 'expo-status-bar';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Intro, Login, Register, ViewContents, ViewContent, Reset} from './src/pages';

const Stack = createNativeStackNavigator();

export default function App() {
  return (

    <NavigationContainer>
      <StatusBar style="light" backgroundColor='#009961' />
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
        initialRouteName={"SingIn"}
      >

        <Stack.Screen name="Home" component={MainTab}/>
        <Stack.Screen name="SingUp" component={Register} />
        <Stack.Screen name="SingIn" component={Login} />
        <Stack.Screen name="Intro" component={Intro} />
        <Stack.Screen name="Reset" component={Reset} />
        <Stack.Screen name="ViewContents" component={ViewContents}/>
        <Stack.Screen name="ViewContent" component={ViewContent}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
}
