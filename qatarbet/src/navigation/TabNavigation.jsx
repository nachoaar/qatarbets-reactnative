import React from 'react'
import { NavigationContainer } from '@react-navigation/native'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
// import Icon from "react-native-vector-icons/FontAwesome5";
import Icon from 'react-native-vector-icons/Ionicons';


import GamblerScreen from '../screens/GamblerScreen'
import BetScreen from '../screens/BetScreen'
import MatchScreen from '../screens/MatchScreen'

import LandingPage from '../screens/LandingPage';
import LoginScreen from '../screens/LoginScreen';
import { StyleSheet } from 'react-native';
import CustomTabBarButton from '../components/CustomTabBarButton';


const Tab = createBottomTabNavigator()

const TabNavigation = () => {

  return ( 
    <NavigationContainer style={{backgroundColor: '#F8F8FA'}}>
      <Tab.Navigator
        screenOptions={({route}) => ({
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: styles.tabBarStyle,
        })}
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
            tabBarButton: props => <CustomTabBarButton {...props} />,
          }}
        />

        <Tab.Screen
          name='Gambler'
          component= { GamblerScreen }
          options={{
            tabBarButton: props => <CustomTabBarButton {...props} />,
          }}
        />

        <Tab.Screen
          name='Bet'
          component= { BetScreen }
          options={{
            tabBarButton: props => <CustomTabBarButton {...props} />,
          }}
        />

      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default TabNavigation

const styles = StyleSheet.create({
  tabBarStyle: {
    position: 'absolute',
    backgroundColor: 'transparent',
    borderTopWidth: 0,
    bottom: 15,
    right: 10,
    left: 10,
    height: 60,
    borderRadius: 25,
    overflow: 'hidden',
    elevation: 2,
    shadowColor: 'gray'
  }
})  
