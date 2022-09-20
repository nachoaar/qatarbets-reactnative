import React from 'react'
import { Text, View, StyleSheet, TouchableWithoutFeedback } from 'react-native'
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getGamblerId } from "../../redux/actions/gambler/gamblerActions";
import BetModal from './BetModal';
import { useState } from 'react';
import { matchId } from '../../redux/actions/match/matchAction';


export default function BetCard({bets}) {

  // console.log(bets);

  // let user = bets.map((e) => {
  //   e.userId
  // })
  // console.log('user:', user);


  // console.log('userId: ', user.length);

  // console.log('id usuarios >>>>', bets.userId);

  // const dispatch = useDispatch();

  // const gambler = useSelector((store) => store.gambler?.gamblerId)
  // // const matchById = useSelector((store) => store.matches?.matchId)

  // useEffect(() => {
  //   let apuestas = bets.userId
  //   apuestas = apuestas ? bets.userId : apuestas
  //   dispatch(getGamblerId(apuestas))
  //   // dispatch(matchId(props.matchId))
  // },[dispatch, bets])

  // console.log('gambler >>>>>', gambler);

  const [modalOpen, setModalOpen] = useState(false);

  const handleOnPress = (e) => {
    e.preventDefault();
    setModalOpen(true);
  }

  // console.log('gamblerId ....>', gamblerId);

  return (
    <>
      <TouchableWithoutFeedback
        onPress={(e) => handleOnPress(e)}
      >
        <View style={styles.card}>
          <View style={styles.spacing}>
            <View style={styles.bgStyle}>
            {/* <Text style={styles.condition}>{!user ? 'Usuario' : user[0]?.name}</Text> */}
              <Text style={styles.condition}>a</Text>
              <Text>a</Text>
              <Text>a</Text>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
      <BetModal
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
      />
    </>   
  )
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    height: 130,
    marginBottom: 5
  },
  spacing: {
    flex: 1,
    padding: 5,
  },
  bgStyle: {
    backgroundColor: '#FFFFFF',
    height: '100%',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  condition: {
    width:'100%',
    textAlign:'center',
    paddingVertical: 5,
    height: 30,
    borderBottomWidth: 1,
    borderBottomColor: '#F8F8FA'
  }
})