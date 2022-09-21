import React from 'react'
import { Text, View, StyleSheet, TouchableWithoutFeedback } from 'react-native'
import BetModal from './BetModal';
import { useState } from 'react';


export default function BetCard({bets}) {

  const [modalOpen, setModalOpen] = useState(false);

  const handleOnPress = (e) => {
    e.preventDefault();
    setModalOpen(true);
  }

  return (
    <>
      <TouchableWithoutFeedback
        onPress={(e) => handleOnPress(e)}
      >
        <View style={styles.card}>
          <View style={styles.spacing}>
            <View style={styles.bgStyle}>
              <Text style={styles.username}>{bets.user}</Text>
              <Text>{bets.match}</Text>
              <View style={styles.apuesta}>
                <Text>{bets.money_bet}</Text>
                <Text>{bets.final_profit === null || bets.final_profit === 0 ? 'Perdido' : 'Ganado'}</Text>
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
  username: {
    width:'100%',
    textAlign:'center',
    paddingVertical: 5,
    height: 30,
    borderBottomWidth: 1,
    borderBottomColor: '#F8F8FA',
    backgroundColor:'yellow'
  },
  apuesta: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around'
  }
})