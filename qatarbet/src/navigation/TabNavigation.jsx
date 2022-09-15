import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icon from "react-native-vector-icons/FontAwesome5";


import { Text } from 'react-native'

import UserScreen from '../screens/UserScreen'
import BetScreen from '../screens/BetScreen'
import MatchScreen from '../screens/MatchScreen'
import Search from '../components/Search';



const Tab = createBottomTabNavigator()

const TabNavigation = () => {

  return (
    <NavigationContainer>
      <Search />
      <Tab.Navigator>
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
          name='Users'
          component= { UserScreen }
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
