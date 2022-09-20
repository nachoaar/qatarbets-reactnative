import { View, Text, StyleSheet, FlatList, Pressable } from 'react-native'
import React from 'react'
import GamblerCard from './GamblerCard';
import { cacheDashGambler } from '../../redux/actions/gambler/gamblerActions';
import { useDispatch } from 'react-redux';

export default function GamblerList(props) {

  const dispatch = useDispatch();

  const onPressSubmiteCache = async () => {
    dispatch(cacheDashGambler())
  }

  return (
    <>
      <View style={styles.container}>
        <View style={styles.betNum}>
          <Text>Total de usuarios:</Text>
          <View style={styles.num}>
            <Text>{props.gamblers?.length}</Text>
          </View>
        </View>
        <View>
          <Pressable
            onPress={() => onPressSubmiteCache()}
          >
            <Text>All</Text>
          </Pressable>
        </View>
      </View>
      <FlatList 
        data={props.gamblers}
        numColumns={2}
        keyExtractor={(gambler) => gambler.id}
        showsVerticalScrollIndicator={false}
        renderItem={({ item : gamblers}) => (
          <GamblerCard 
            id={gamblers.id}
            name={gamblers.name}
            age={gamblers.age}
            email={gamblers.email}
            avatar={gamblers.avatar}
            userbanned={gamblers.userbanned}
            rol={gamblers.rol}
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