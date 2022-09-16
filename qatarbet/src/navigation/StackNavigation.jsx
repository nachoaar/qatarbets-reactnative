import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'

import LandingPage from '../screens/LandingPage'
import LoginScreen from '../screens/LoginScreen'

import TabNavigation from '../navigation/TabNavigation'

const Stack = createNativeStackNavigator()

const StackNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen 
          options={{headerShown: false}}
          name='Landing'
          component= { LandingPage }
        />

        <Stack.Screen 
          options={{title: null, headerTransparent: true }}
          name='Login'
          component= { LoginScreen }
        />

        <Stack.Screen 
          options={{headerShown: false}}
          name='TabNavigation'
          component= { TabNavigation }
        />
        
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default StackNavigation
