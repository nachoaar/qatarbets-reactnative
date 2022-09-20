import axios from "axios";
import React, { useEffect } from "react";
import { Text, View, Pressable } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { getMatches, filterMatchesStatus } from "../redux/actions/match/matchAction"


export default function MatchScreen() {

  const {matches} = useSelector((store) => store.matches);
  console.log(matches);
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
    dispatch(getMatches());
  }, [])

  return (
    <View>
      <Pressable onPress={onPressFinished}>
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
