import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'

import LandingPage from '../screens/LandingPage'
import LoginScreen from '../screens/LoginScreen'


const Stack = createNativeStackNavigator()

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen 
          options={{headerShown: false}}
          name='Landing'
          component= { LandingPage }
        />

        <Stack.Screen 
          name='Login'
          component= { LoginScreen }
        />
        
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation
