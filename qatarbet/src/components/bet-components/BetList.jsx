import { View, Text, FlatList, StyleSheet, TouchableHighlight } from 'react-native'
import React, { useEffect, useState } from 'react'
import BetCard from './BetCard';
import Icon from "react-native-vector-icons/FontAwesome5";
import { getBets } from '../../redux/actions/bet/betActions';
import { useDispatch, useSelector } from 'react-redux';
import { Graph } from '../../screens/graph/Graph';

export default function BetList() {

  const dispatch = useDispatch();

  const bets = useSelector((store) => store.bets?.bets);

  useEffect(() => {
    if(bets.length === 0) {
      dispatch(getBets());
    }
  },[]);

  console.log(bets.length);


  const [viewChart, setViewChart] = useState(false);

  const handleOnPress = (e) => {
    e.preventDefault();
    if (viewChart === false) {
      setViewChart(true);
    } else {
      setViewChart(false);
    }
  }

  // const betCards = ({item}) => {
  //   return (
  //     <BetCard
  //       bets={item}
  //     />
  //   )
  // }


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
          <Graph />
        </View>
      ) : (
        <FlatList
          data={bets}
          numColumns={1}
          keyExtractor={(bet) => bet.id}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => (
            <BetCard 
              bets={item}
            />
          )}
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