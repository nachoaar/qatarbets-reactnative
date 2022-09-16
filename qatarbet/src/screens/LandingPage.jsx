import React from "react";
import { StyleSheet, Image, Text, TouchableOpacity, View } from "react-native";
import Logo from "../../assets/logo.png"


import StyledTouchableOpacity from "./styled-screen/StyledTouchableOpacity";

const LandingPage = ({ navigation }) => {

  return (
    <View style={styles.container}>
      <Image
        source={Logo}
        style={ {height: 250, width: 250, resizeMode: 'contain' } } />
      <StyledTouchableOpacity
        onPress={() => {
          navigation.navigate('Login')
        }}
      >
        <Text style={{color: '#7A7A7A'}}>Acceder</Text>
      </StyledTouchableOpacity>
    </View>
  )
}

export default LandingPage;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white'
  }
})