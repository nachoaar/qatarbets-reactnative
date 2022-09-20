import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icon from "react-native-vector-icons/FontAwesome5";

import GamblerScreen from '../screens/GamblerScreen'
import BetScreen from '../screens/BetScreen'
import MatchScreen from '../screens/MatchScreen'

import LandingPage from '../screens/LandingPage';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginScreen';


const Tab = createBottomTabNavigator()
const Stack = createNativeStackNavigator()
const TabNavigation = () => {

  return ( 
    <NavigationContainer independent={true}>
      <Tab.Navigator
        screenOptions={{
          headerShown: false
        }}
      >
        <Tab.Screen
          name='Landing'
          component= { LandingPage }
          options={{
            tabBarStyle: { display: "none" },
            tabBarButton: () => null
          }}
        />

        <Tab.Screen 
          options={{
            tabBarStyle: { display: "none" },
            tabBarButton: () => null
          }}
          name='Login'
          component={ LoginScreen }
        />
        
        <Tab.Screen
          name='Match'
          component= { MatchScreen }
          options={{
            tabBarIcon: ({color, size}) => (
              <Icon  name="futbol" color={color} size={size} />
            )
          }}
        />

        <Tab.Screen
          name='Gambler'
          component= { GamblerScreen }
          options={{
            tabBarIcon: ({color, size}) => (
              <Icon  name="user" color={color} size={size} />
            )
          }}
        />

        <Tab.Screen
          name='Bet'
          component= { BetScreen }
          options={{
            tabBarIcon: ({color, size}) => (
              <Icon name="dollar-sign" color={color} size={size} />
            )
          }}
        />

      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default TabNavigation
