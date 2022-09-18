import React from "react";
import { StyleSheet, Text, View } from "react-native";

import Searchbar from "./Searchbar";


export default function Header () {

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.text}>Bienvenido, Ignacio</Text>
        <Text>Menu para logout</Text>
      </View>
      <Searchbar />
    </>
  )

}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F8F8FA',
    height: 120,
    paddingHorizontal: 25,
    paddingBottom:10,
    flexDirection: 'row',
    alignItems:'flex-end',
    justifyContent:'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#E4E4E4'
  },
  text: {
    color:'red'
  }
})
