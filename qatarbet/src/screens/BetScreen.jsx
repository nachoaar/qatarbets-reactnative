import React from "react";
import { useEffect } from "react";
import { View, StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import BetList from "../components/bet-components/BetList";
import { getBets } from "../redux/actions/bet/betActions";


export default function BetScreen () {


  return (
    <View style={styles.container}>
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