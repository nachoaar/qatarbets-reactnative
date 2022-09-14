import React from "react";
import { StyleSheet, Image, Text, TouchableOpacity, View } from "react-native";
import Logo from '../../media/Logo.png'


export const LandingPage = () => {

  return (
    <View>
      <Image
      source={Logo}
      style={ {height: 200, width: 200 } } />
      <TouchableOpacity
      style={styles.botton}
      >
        <Text>Acceder</Text>
      </TouchableOpacity>
    </View>
  )
}


const styles = StyleSheet.create({
  botton: {
    backgroundColor: 'red',
    alignItems: "center",
    padding: 10,
    margin: 20,
    borderRadius: 10
  }
})
