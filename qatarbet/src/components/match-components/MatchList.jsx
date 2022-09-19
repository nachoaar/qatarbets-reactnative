import { View, Text, StyleSheet, FlatList } from 'react-native'
import React from 'react'
import MatchCard from './MatchCard';


export default function MatchList(props) {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.betNum}>
          <Text>Total de partidos:</Text>
          <View style={styles.num}>
            <Text>{props.matchs?.length}</Text>
          </View>
        </View>
      </View>
      <FlatList 
        data={props.matchs}
        numColumns={2}
        keyExtractor={(match) => match.id}
        showsVerticalScrollIndicator={false}
        renderItem={({ item : matchs}) => (
          <MatchCard 
            id={matchs.id}
            date={matchs.date}
            status={matchs.status}
            home_team={matchs.home_team.name}
            away_team={matchs.away_team.name}
            result_match={matchs.result_match}
            stadium_name={matchs.stadium_name}
            city={matchs.city}
          />
        )}
      />
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 5
  },
  betNum: {
    flexDirection: 'row',
    height: 50,
    alignItems: 'center'
  },
  num: {
    marginLeft: 10,
    backgroundColor: '#FFF',
    height: 30,
    width: 30,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  }
})