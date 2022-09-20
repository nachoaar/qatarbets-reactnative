import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Text, View, FlatList, Image, StyleSheet, Alert, Pressable } from "react-native";
import { getGamblers, cacheDashGambler } from '../redux/actions/gambler/gamblerActions'
import { ModalVisible } from './modal'
import { getBets } from "../redux/actions/bet/betActions";
import GamblerList from "../components/gambler-components/GamblerList";
// import { Graph } from './graph/Graph'

export default function UserScreen () {

  const [modalVisible, setModalVisible] = useState(false);
  const [modalEntry, setModalEntry] = useState();

  const dispatch = useDispatch();
  const gamblers = useSelector((store) => store.gambler?.gamblers)
  const gamblerName = useSelector((store) => store.gambler?.gamblerName)
  const bets = useSelector((store) => store.bet?.bets)


  if(gamblerName){
    if(gamblerName.error){
      Alert.alert(
        'ERROR',
        gamblerName.error,
        [
          { text: "OK", onPress: () => console.log("OK Pressed") }
        ]
      )
    }
  }

  useEffect(() => {
    if(bets.length === 0){
      dispatch(getBets())
    }
    if(gamblers.length === 0){
      dispatch(getGamblers());
    }
    return () => {
      dispatch(cacheDashGambler());
    }
  }, [dispatch, gamblers])

  return (
    <View style={styles.container}>
      <GamblerList
        gamblers={gamblerName?.name? [gamblerName] : gamblers}
        bets={bets}
      />
      {/* <View>
      <FlatList
        data={gamblers}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
            <View>
              <Image source={{uri: item.avatar}} style={{width: 80, height: 80}}/>
              <View>
              <Text>name: {item.name}</Text>
              <Text>rol: {item.rol}</Text>
              <Text>status: {item.userbanned === false ? 'Ative': 'Banned'}</Text>
              </View>
              <View>
              <Pressable
                style={[styles.button, styles.buttonOpen]}
                onPress={() => {
                  setModalVisible(!modalVisible);
                  setModalEntry(item);
                  }}
              >
                <Text style={styles.textStyle}>
                  View more
                </Text>
              </Pressable>
              </View>
            </View>
        )
      }
      />
      </View>
      <View>
        {modalEntry ?
        <ModalVisible
        bets={bets}
        modalEntry={modalEntry}
        modalVisible={modalVisible}
        onClose={() => setModalVisible(false)}
        /> : null
        }
      </View> */}
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    height: '100%',
    paddingHorizontal: 10,
    backgroundColor: '#F8F8FA'
  }
});


