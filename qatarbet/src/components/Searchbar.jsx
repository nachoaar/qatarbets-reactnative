import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { SearchBar } from "react-native-screens";

export default function Searchbar () {

  return (
    <View style={styles.container}>
      <Text>Searchbar</Text>
    </View>
  )

}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingVertical: 20,
    alignItems:'center',
  },
  text: {
    
  }
})
