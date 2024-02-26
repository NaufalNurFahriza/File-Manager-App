import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Home from './screen/Home';
import Details from './screen/Details';
import Profile from './screen/Profile';

const Tab = createBottomTabNavigator();

const homeScreen = 'Home';
const detailsScreen = 'Details';
const profileScreen = 'Profile';

export default function Routing() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={homeScreen}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;

            if (rn === homeScreen) {
              iconName = focused ? 'home' : 'home-outline';
            } else if (rn === detailsScreen) {
              iconName = focused ? 'list' : 'list-outline';
            } else if (rn === profileScreen) {
              iconName = focused ? 'person' : 'person-outline';
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
      >
        <Tab.Screen name={homeScreen} component={Home} />
        <Tab.Screen name={detailsScreen} component={Details} />
        <Tab.Screen name={profileScreen} component={Profile} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
