import { View, Text, StyleSheet, FlatList, Pressable } from 'react-native'
import React from 'react'
import GamblerCard from './GamblerCard';
import { cacheDashGambler } from '../../redux/actions/gambler/gamblerActions';
import { useDispatch } from 'react-redux';
import Icon from 'react-native-vector-icons/Ionicons';

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
            <Text style={{color: 'white'}}>{props.gamblers?.length}</Text>
          </View>
        </View>
        <View>
          <Pressable
            style={{flexDirection: 'row', alignItems: 'center'}}
            onPress={() => onPressSubmiteCache()}
          >
            <Text style={{marginRight: 10}}>All</Text>
            <Icon name='filter-outline' size={15}/>
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
    paddingHorizontal: 5,
    marginTop: 0,
    position: 'relative',
    elevation: 3,
    zIndex: 1
  },
  betNum: {
    flexDirection: 'row',
    height: 50,
    alignItems: 'center'
  },
  num: {
    marginLeft: 5,
    backgroundColor: '#D20A46',
    height: 30,
    width: 30,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  }
})