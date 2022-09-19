import React, { useEffect } from "react";
import { Text, View, StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import MatchList from "../components/match-components/MatchList";
import { getMatches } from "../redux/actions/match/matchAction"


export default function MatchScreen() {

  const dispatch = useDispatch();
  
  const matchs = useSelector((store) => store.matches?.matches);

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