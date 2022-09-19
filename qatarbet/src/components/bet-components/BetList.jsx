import { View, Text, FlatList, StyleSheet, TouchableHighlight } from 'react-native'
import React, { useState } from 'react'
import BetCard from './BetCard';
import Icon from "react-native-vector-icons/FontAwesome5";

export default function BetList({bets}) {

  const [viewChart, setViewChart] = useState(false);

  const handleOnPress = (e) => {
    e.preventDefault();
    if (viewChart === false) {
      setViewChart(true);
    } else {
      setViewChart(false);
    }
  }

  return (
    <>
      <View style={styles.container}>
        <View style={styles.betNum}>
          <Text>Total de apuestas:</Text>
          <View style={styles.num}>
            <Text>{bets?.length}</Text>
          </View>
        </View>
        <View style={styles.icon}>
          <Text onPress={(e) => handleOnPress(e)} style={{marginRight: 5}}>
            {viewChart === true ? (
              <Icon  name="list" size={20} />
            ): (
              <Icon  name="chart-bar" size={20} />
            )}
          </Text>
        </View>
      </View>
      {viewChart === true ? (
        <View>
          <Text>hola soy las charts</Text>
        </View>
      ) : (
        <FlatList
          data={bets}
          numColumns={2}
          keyExtractor={(bet) => bet.id}
          showsVerticalScrollIndicator={false}
          renderItem={({ item : bets}) => (
            <BetCard
              id={bets.id}
              result={bets.result}
              money_bet={bets.money_bet}
              userId={bets.userId}
              matchId={bets.matchId}
              final_profit={bets.final_profit}
              fecha_hora={bets.fecha_hora}
            />
          )}
          contentContainerStyle={styles.flatListContentContainer}
        />
      )}
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'space-between',
    paddingHorizontal: 5
  },
  betNum: {
    flexDirection: 'row',
    height: 50,
    alignItems: 'center',
  },
  num: {
    marginLeft: 10,
    backgroundColor: '#FFF',
    height: 30,
    width: 30,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    backgroundColor: '#FFF',
    height: 30,
    width: 50,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  }
})