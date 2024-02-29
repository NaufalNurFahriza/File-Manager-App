import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Profile from './screen/Profile';
import Home from './screen/Home';
import Files from './screen/Files';

const Tab = createBottomTabNavigator();

const homeScreen = 'Home';
const filesScreen = 'Files';
const profileScreen = 'Profile';

export default function BottomNav() {
  return (
      <Tab.Navigator
        initialRouteName={homeScreen}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;

            if (rn === homeScreen) {
              iconName = focused ? 'home' : 'home-outline';
            } else if (rn === filesScreen) {
              iconName = focused ? 'folder-open' : 'folder-open-outline';
            } else if (rn === profileScreen) {
              iconName = focused ? 'person' : 'person-outline';
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: '#243bbb',
          inactiveTintColor: 'grey',
          labelStyle: { paddingBottom: 10, fontSize: 10},
          style: {padding: 10, height: 70}
        }}
      >

        <Tab.Screen name={homeScreen} component={Home} />
        <Tab.Screen name={filesScreen} component={Files} />
        <Tab.Screen name={profileScreen} component={Profile} />
      </Tab.Navigator>
  );
}
