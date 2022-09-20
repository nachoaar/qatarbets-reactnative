import React from "react";
import { View, StyleSheet } from "react-native";

import BetList from "../components/bet-components/BetList";
import Header from "../components/Header";


export default function BetScreen () {


  return (
    <View style={styles.container}>
      <Header />
      <BetList />   
    </View>
  )

}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    paddingHorizontal: 10,
    backgroundColor: '#F8F8FA',
  }
})