import React from "react";
import { StyleSheet, Image, Text, TouchableOpacity, View } from "react-native";
import Logo from '../media/Logo.png'
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';


const LandingPage = ({ navigation }) => {

  return (
    <View style={styles.container}>
      <Image
        source={Logo}
        style={ {height: 250, width: 250, resizeMode: 'contain' } } />
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Login')
        }}
        style={styles.touchableOpacity}
      >
        <Text style={{color: '#7A7A7A'}}>Acceder</Text>
      </TouchableOpacity>
    </View>
  )
}

export default LandingPage;


const styles = StyleSheet.create({
  container: {
    width: 300,
    alignItems: 'center',
    justifyContent: 'center'
  },
  touchableOpacity: {
    borderWidth: 2,
    borderColor: "#FF003F",
    width: 150,
    alignItems: "center",
    padding: 15,
    borderRadius: 50,
    alignSelf: 'center'
  },
})
