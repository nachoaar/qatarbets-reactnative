import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Text, View, FlatList, Image, StyleSheet, Pressable } from "react-native";
import { getGamblers, cacheDashGambler } from '../redux/actions/gambler/gamblerActions'
import { ModalVisible } from './modal'
import { getBets } from "../redux/actions/bet/betActions";
// import { Graph } from './graph/Graph'



export default function UserScreen () {

  const [modalVisible, setModalVisible] = useState(false);
  const [modalEntry, setModalEntry] = useState();

  const dispatch = useDispatch();
  const { gamblers } = useSelector((store) => store.gambler)
  const { gamblerName } = useSelector((store) => store.gambler)
  const { bets } = useSelector((store) => store.bet)

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
    <View>
      <Text>Usuarios</Text>
      <View>
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
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 15
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 10,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 10,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 10,
    textAlign: "center"
  }
});


