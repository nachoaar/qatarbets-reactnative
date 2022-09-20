import React, { useEffect } from "react";

import { Text, View, StyleSheet, Pressable } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import MatchList from "../components/match-components/MatchList";
import { getMatches, filterMatchesStatus } from "../redux/actions/match/matchAction"



export default function MatchScreen() {

  const {matches} = useSelector((store) => store.matches);
  const dispatch = useDispatch()

  const onPressFinished = () => {
    dispatch(filterMatchesStatus("Finished"))
  }

  const onPressNotStarted = () => {
    dispatch(filterMatchesStatus("Not Started"))
  }

  const onPressAllMatches = () => {
    dispatch(filterMatchesStatus("All Matches"))
  }

  useEffect(() => {
    if (matchs.length === 0) {
      dispatch(getMatches());
    }
  },[]);

  console.log(matchs.length);

  return (
    <View style={styles.container}>
      <MatchList 
        matchs={matchs}
      />
      <Pressable  onPress={onPressFinished}>
        <Text>Finished</Text>
      </Pressable>
      <Pressable onPress={onPressNotStarted}>
        <Text>Not Started</Text>
      </Pressable>
      <Pressable onPress={onPressAllMatches}>
        <Text>All Matches</Text>
      </Pressable>
      <Text>Hola soy Match</Text>
    </View>
  )

}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    paddingHorizontal: 10,
    backgroundColor: '#F8F8FA'
  }
})

