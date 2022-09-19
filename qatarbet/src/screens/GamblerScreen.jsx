import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { View, StyleSheet } from "react-native";
import { getGamblers, cacheDashGambler } from '../redux/actions/gambler/gamblerActions'
import { getBets } from "../redux/actions/bet/betActions";
import GamblerList from "../components/gambler-components/GamblerList";
// import { Graph } from './graph/Graph'

export default function UserScreen () {

  const dispatch = useDispatch();
  const gamblers = useSelector((store) => store.gambler?.gamblers)
  const bets = useSelector((store) => store.bets?.bets)

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
      <GamblerList 
        gamblers={gamblers}
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


