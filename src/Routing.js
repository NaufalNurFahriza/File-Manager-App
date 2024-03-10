import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Login from './screen/Login';
import Register from './screen/Register';
import BottomNav from './BottomNav';
import EditProfile from './screen/EditProfile';
import Splash from './screen/Splash';
import About from './screen/About';
import ConvertFile from './screen/ConvertFile';
const Stack = createNativeStackNavigator();

const Routing = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="BottomNav" component={BottomNav} />
        <Stack.Screen name="EditProfile" component={EditProfile} />
        <Stack.Screen name="About" component={About} />
        <Stack.Screen name="ConvertFile" component={ConvertFile} />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routing;
