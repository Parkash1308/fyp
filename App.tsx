import React, { useState }  from 'react'; 
import {NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LogIn from './Components/LogIn'
import Home from './Components/Home';
import GeoVerify from './Components/GeoVerify';
import ApplyLeave from './Components/ApplyLeave';

export type RootStackParamList = {
  LogIn: undefined;
  Home: undefined;
  GeoVerify: undefined;
  ApplyLeave: undefined;
  
};
const Stack = createNativeStackNavigator<RootStackParamList>();



function App(): React.JSX.Element {  
  return (
    
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LogIn">
        <Stack.Screen name="LogIn" component={LogIn} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="GeoVerify" component={GeoVerify} />
        {/* <Stack.Screen name="ApplyLeave" component={ApplyLeave} /> */}
      </Stack.Navigator>
    </NavigationContainer>
    
  );
}

export default App;
