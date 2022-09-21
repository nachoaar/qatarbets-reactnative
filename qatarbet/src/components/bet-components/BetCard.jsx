import React from 'react'
import { Text, View, StyleSheet, TouchableWithoutFeedback } from 'react-native'
import BetModal from './BetModal';
import { useState } from 'react';
import { TouchableHighlight } from 'react-native-gesture-handler';


export default function BetCard({ bets }) {

  const [modalOpen, setModalOpen] = useState(false);

  const handleOnPress = (e) => {
    e.preventDefault();
    setModalOpen(true);
  };


  return (
    <>
      <TouchableWithoutFeedback
        onPress={(e) => handleOnPress(e)}
      >
        <View style={styles.card}>
          <View style={styles.spacing}>
            <View style={styles.shadow}>
              <View style={styles.nameView}>
                <Text style={styles.username}>{bets.user}</Text>
              </View>
              <View style={styles.matchView}>
                <Text style={styles.match}>{bets.match}</Text>
              </View>
              <View style={styles.bet}>
                <Text style={bets.final_profit === null || bets.final_profit === 0 ? styles.betAmountLost : styles.betAmountWon}>${bets.money_bet}</Text>
                <Text style={bets.final_profit === null || bets.final_profit === 0 ? styles.betResultLost : styles.betResultWon}>{bets.final_profit === null || bets.final_profit === 0 ? 'Perdido' : 'Ganado'}</Text>
              </View>
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
    marginBottom: 15
  },
  spacing: {
    // backgroundColor: 'yellow',
    flex: 1,
    paddingHorizontal: 5,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  // shadow: {
  //   shadowColor: "#000",
  //   shadowOffset: {
  //     width: 0,
  //     height: 2,
  //   },
  //   shadowOpacity: 0.25,
  //   shadowRadius: 3.84,

  //   elevation: 5,
  // },
  nameView: {
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    backgroundColor: '#D20A46',
    borderBottomWidth: 2,
    borderBottomColor: '#E4E4E4',
    height: 40,
  },
  username: {
    // height: 40,
    width: '100%',
    textAlign: 'center',
    textTransform: 'uppercase',
    fontWeight: '700',
    color: '#F8F8FA',
    fontFamily: 'Roboto',
    paddingVertical: 5,
    marginVertical: 5,
    height: 30,
  },
  matchView: {
    borderBottomWidth: 2,
    borderBottomColor: '#E4E4E4',
    height: 45,
    borderLeftWidth: 2,
    borderLeftColor: '#E4E4E4',
    borderRightWidth: 2,
    borderRightColor: '#E4E4E4',
  },
  match: {
    width: '100%',
    textAlign: 'center',
    fontFamily: 'Koulen',
    fontSize: 17,
    paddingTop: 6,
  },
  bet: {
    // backgroundColor: 'yellow',
    height: 40,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderBottomWidth: 2,
    borderBottomColor: '#E4E4E4',
    borderLeftWidth: 2,
    borderLeftColor: '#E4E4E4',
    borderRightWidth: 2,
    borderRightColor: '#E4E4E4',
  },
  betAmountLost: {
    fontWeight: '500',
    fontSize: 17,
    color: '#D20A46'
  },
  betAmountWon: {
    fontWeight: '500',
    fontSize: 17,
    color: 'green'
  },
  betResultLost: {
    fontWeight: '500',
    fontSize: 17,
    color: '#D20A46'
  },
  betResultWon: {
    fontWeight: '500',
    fontSize: 17,
    color: 'green'
  },

})