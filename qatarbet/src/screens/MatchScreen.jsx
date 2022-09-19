import axios from "axios";
import React, { useEffect } from "react";
import { Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { getMatches } from "../redux/actions/match/matchAction"


export default function MatchScreen() {

  const {matches} = useSelector((store) => store.matches);
  console.log(matches);
  const dispatch = useDispatch()
  
  console.log(matches);

  useEffect(() => {
    dispatch(getMatches());
  }, [])

  return (
    <View>
      <Text>Hola soy Match</Text>
    </View>
  )

}