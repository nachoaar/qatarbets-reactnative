import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Text, View, FlatList, Image, StyleSheet, Alert, Pressable } from "react-native";

import { getGamblers, cacheDashGambler } from '../redux/actions/gambler/gamblerActions'
import { getBets } from "../redux/actions/bet/betActions";
import GamblerList from "../components/gambler-components/GamblerList";
// import { Graph } from './graph/Graph'

import Searchbar from "../components/Searchbar";


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

  console.log(gamblers.length);

  return (
    <View style={styles.container}>
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
    backgroundColor: '#F8F8FA'
  }
});


