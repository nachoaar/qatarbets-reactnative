import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { View, StyleSheet, Alert } from "react-native";

import { getGamblers, cacheDashGambler } from '../redux/actions/gambler/gamblerActions'

import GamblerList from "../components/gambler-components/GamblerList";


import Searchbar from "../components/Searchbar";
import Header from "../components/Header";


export default function UserScreen () {

  const dispatch = useDispatch();
  const gamblers = useSelector((store) => store.gambler?.gamblers)

  const bets = useSelector((store) => store.bets?.bets)

  const gamblerName = useSelector((store) => store.gambler?.gamblerName)

  if(gamblerName){
    if(gamblerName.error){
      Alert.alert(
        'ERROR',
        gamblerName.error,
        [
          { text: "OK", onPress: () => console.log("OK Pressed") }
        ]
      )
    }
  }

  useEffect(() => {
    if(gamblers.length === 0){
      dispatch(getGamblers());
    }
    return () => {
      dispatch(cacheDashGambler());
    }
  }, [])


  return (
    <View style={styles.container}>
      <Header />
      <Searchbar />
      <GamblerList
        gamblers={gamblerName?.name? [gamblerName] : gamblers}
        bets={bets}
      />
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    height: '100%',
    paddingHorizontal: 10,
    backgroundColor: '#F8F8FA',
    paddingBottom: 80
  }
});


