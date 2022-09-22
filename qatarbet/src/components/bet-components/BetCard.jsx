import React from 'react'
import { Text, View, StyleSheet, TouchableWithoutFeedback } from 'react-native'
import BetModal from './BetModal';
import { useState } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

export default function BetCard({ bets }) {

  let date = new Date(bets.fecha_hora);

  date = date.toLocaleDateString("es-AR", {
    weekday: "long",
    day: "numeric",
    month: "numeric",
    year: "numeric",
  });

  let hora = new Date(bets.fecha_hora)

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
            <View style={styles.bgStyle}>
              <View style={styles.nameView}>
                <Text style={styles.username}>{bets.user}</Text>
              </View>
              <View style={styles.matchView}>
                <Text style={styles.match}>{bets.match}</Text>
              </View>
              <View style={styles.bet}>
                <View style={styles.cash}>
                  <Icon style={bets.final_profit === null || bets.final_profit === 0 ? styles.iconLost : styles.iconWon} size={20} name="cash-outline" />
                  <Text style={bets.final_profit === null || bets.final_profit === 0 ? styles.betAmountLost : styles.betAmountWon}>{bets.money_bet}</Text>
                </View>
                <Text style={bets.final_profit === null || bets.final_profit === 0 ? styles.betResultLost : styles.betResultWon}>{bets.final_profit === null || bets.final_profit === 0 ? 'Perdido' : 'Ganado'}</Text>
              </View>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
      <BetModal
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
        date={date}
        hour={hora}
        final_profit={bets.final_profit}
        match={bets.match}
        money_bet={bets.money_bet}
        result={bets.result}
        user={bets.user}
        userId={bets.userId}
      />
    </>
  )
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    height: 130,
    marginBottom: 15,
  },
  spacing: {
    flex: 1,
    paddingHorizontal: 5,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  iconLost: {
    color: '#D20A46',
    marginHorizontal: 5
  },
  iconWon: {
    color: 'green',
    marginHorizontal: 5
  },
  cash: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  nameView: {
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    backgroundColor: '#D20A46',
    height: 40,
  },
  username: {
    width: '100%',
    textAlign: 'center',
    color: '#F8F8FA',
    fontFamily: 'Roboto',
    textTransform: 'uppercase',
    paddingVertical: 5,
    marginVertical: 5,
    height: 30,
  },
  matchView: {
    borderBottomWidth: 1,
    borderBottomColor: '#E4E4E4',
    height: 45,
    borderLeftWidth: 1,
    borderLeftColor: '#E4E4E4',
    borderRightWidth: 1,
    borderRightColor: '#E4E4E4',
    alignItems: 'center',
    justifyContent: 'center'
  },
  match: {
    width: '100%',
    textAlign: 'center',
    fontFamily: 'Koulen',
    fontSize: 14,
  },
  bet: {
    height: 40,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#E4E4E4',
    borderLeftWidth: 1,
    borderLeftColor: '#E4E4E4',
    borderRightWidth: 1,
    borderRightColor: '#E4E4E4',
  },
  betAmountLost: {
    fontSize: 14,
  },
  betAmountWon: {
    fontSize: 14,
  },
  betResultLost: {
    fontSize: 14,
    color: '#D20A46'
  },
  betResultWon: {
    fontSize: 14,
    color: 'green'
  },
  bgStyle: {
    backgroundColor: 'white'
  }
})