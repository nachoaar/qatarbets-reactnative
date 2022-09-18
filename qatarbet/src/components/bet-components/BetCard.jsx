import React from 'react'
import { Text, View, StyleSheet, TouchableWithoutFeedback } from 'react-native'
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getGamblerId } from "../../redux/actions/gambler/gamblerActions";
import BetModal from './BetModal';
import { useState } from 'react';


export default function BetCard(props) {

  // console.log('id usuarios >>>>', props.userId);

  const [modalOpen, setModalOpen] = useState(false);

  // const dispatch = useDispatch();

  // const {gamblerId} = useSelector((store) => store.gambler)

  // useEffect(() => {
  //   if(props.userId === null) {
  //     dispatch(getGamblerId('406a59ce-bc66-4a32-a52f-e8517f73342c'));
  //   } else {
  //     dispatch(getGamblerId(props.userId));
  //   }
  // },[dispatch, props.userId])

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
              <Text>Home vs Away</Text>
              <Text style={{color: props.final_profit > 0 ? 'green' : 'red'}}>{props.final_profit > 0 ? 'Win' : 'Lose'}</Text>
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