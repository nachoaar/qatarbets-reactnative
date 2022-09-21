import { View, Text, FlatList, StyleSheet, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import BetCard from './BetCard';
import SelectList from 'react-native-dropdown-select-list';
import Icon from "react-native-vector-icons/FontAwesome5";
import { getBets, orderBets } from '../../redux/actions/bet/betActions';
import { useDispatch, useSelector } from 'react-redux';

export default function BetList() {

  const dispatch = useDispatch();

  const bets = useSelector((store) => store.bets?.bets);

  useEffect(() => {
    if(bets.length === 0) {
      dispatch(getBets());
    }
  },[]);

  const [selected, setSelected] = useState('');

  const data = [
    {key:'0-9', value:'Mayor Apuesta'},
    {key:'9-0', value:'Menor Apuesta'},
  ]

  const onPressOrder = () => {
    dispatch(orderBets(selected))
  }

  // console.log("AAAAA", bets);


  return (
    <>
      <View style={styles.container}>
        <View style={styles.betNum}>
          <Text>Total de apuestas:</Text>
          <View style={styles.num}>
            <Text style={{color: 'white'}}>{bets?.length}</Text>
          </View>
        </View>
        <SelectList 
          data={data}
          setSelected={setSelected}
          placeholder='Ordenar'
          boxStyles={styles.filter}
          inputStyles={styles.filterText}
          dropdownStyles={styles.dropdownFilter}
          onSelect={() => onPressOrder()}
          search={false}
          defaultOption={{key:'0-9', value:'Mayor Apuesta'}}
        />
      </View>
      <FlatList
        data={bets}
        numColumns={2}
        keyExtractor={(bet) => bet.id}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => (
          <BetCard
            bets={item}
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
    paddingHorizontal: 5,
    marginVertical: 25,
    position: 'relative',
    elevation: 3,
    zIndex: 1
  },
  betNum: {
    flexDirection: 'row',
    height: 50,
    alignItems: 'center',
  },
  num: {
    marginLeft: 5,
    backgroundColor: '#D20A46',
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
  },
  filter: {
    width: 150,
    height: 40,
    borderWidth: 0,
    position: 'relative',    
  },
  filterText: {
    fontSize: 12
  },
  dropdownFilter: {
    position: 'absolute',
    backgroundColor: 'white'
  }
})
