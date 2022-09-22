import React, { useEffect } from "react";

import { View, StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import Header from "../components/Header";
import MatchList from "../components/match-components/MatchList";
import { getMatches} from "../redux/actions/match/matchAction"



export default function MatchScreen() {

  const {filtered} = useSelector((store) => store.matches);
  const dispatch = useDispatch()


  useEffect(() => {
      dispatch(getMatches());
  },[]);


  return (
    <View style={styles.container}>
      <Header />
      <MatchList 
        matchs={filtered}
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
})

