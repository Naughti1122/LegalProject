import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './HomeScreen';
import ClientHomeScreen from './Client/ClientHomeScreen';
import PenComponent from './Client/PenComponent';
import CaseSubmitted from './Client/CaseSubmitted';
import DisplayCases from './Lawyer/DisplayCases';
import SignUpScreen from './Lawyer/SignUpScreen';
import PhoneCall from './PhoneCall';
import Whatsapp from './Whatsapp';
import Pageone from '../sample/Pageone';
import Pagetwo from '../sample/Pagetwo';

const Navigation = () => {

  const Stack = createNativeStackNavigator();


  return (
    <NavigationContainer>
        <Stack.Navigator screenOptions={{header:()=>null}}>
          <Stack.Screen name='HomeScreen' component={HomeScreen} />
          <Stack.Screen name='ClientHomeScreen' component={ClientHomeScreen} /> 
          <Stack.Screen name='PenComponent' component={PenComponent} />
          <Stack.Screen name='CaseSubmitted' component={CaseSubmitted} />
          <Stack.Screen name='DisplayCases' component={DisplayCases} />
          <Stack.Screen name='SignUpScreen' component={SignUpScreen} />
          <Stack.Screen name='PhoneCall' component={PhoneCall} />
          <Stack.Screen name='Whatsapp' component={Whatsapp} />
          <Stack.Screen name='Pageone' component={Pageone} />
          <Stack.Screen name='Pagetwo' component={Pagetwo} />
        </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
