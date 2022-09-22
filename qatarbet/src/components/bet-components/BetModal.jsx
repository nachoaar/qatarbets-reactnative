import { View, Text, Modal, StyleSheet, ScrollView } from 'react-native'
import React from 'react'

import Icon from 'react-native-vector-icons/Ionicons';
import { GraphBet } from '../../screens/graph/GraphBet';
import { useSelector } from 'react-redux';


export default function BetModal(props) {

  const bets = useSelector((store) => store.bets?.bets);

  return (
    <>
      <Modal
        visible={props.modalOpen}
        transparent={true}
        animationType={'fade'}
      >
        <View style={styles.modalContainerStyle}>
          <View style={styles.modalStyle}>
            <View style={styles.head}>
              <View style={styles.exit}>
                <Text  onPress={() => props.setModalOpen(!props.setModalOpen)}> x </Text>
              </View>
            </View>
            <ScrollView
              showsVerticalScrollIndicator={false}
              style={styles.contain}
            >
              <View style={styles.view}>
                <View style={styles.match}>
                  <Text style={{fontSize: 18, fontWeight: 'bold'}}>{props.user}</Text>
                </View>
                <View style={styles.status}>
                  <Text style={{fontSize: 15, fontWeight: 'bold'}}>{props.match}</Text>
                </View>
                <View style={styles.info}>
                  <View style={styles.day}>
                    <Icon name='calendar-outline' size={25}/>
                    <Text>{props.date}</Text>
                    <Text>{`${props.hour.getHours()}:00 hs`}</Text>
                  </View>
                  <View style={styles.city}>
                    <Icon name='trail-sign-outline' size={25}/>
                    <Text>Total apostado: ${props.money_bet}</Text>
                    <Text>Profit total: ${props.final_profit === null || props.final_profit === 0 ? '0' : props.final_profit}</Text>
                  </View>
                </View>
                <View style={styles.result}>
                  <Text style={{fontWeight: 'bold'}}>{props.result}</Text>
                  {props.result_match === null ? (
                    <Text> </Text>
                  ) : (
                    <>
                      <Icon style={{marginHorizontal: 15}} name={props.final_profit === null || props.final_profit === 0 ? 'close-circle-outline' : 'checkmark-circle-outline'} size={25} color={props.final_profit === null || props.final_profit === 0 ? 'red' : 'green'}/>
                      <Text>{props.final_profit === null || props.final_profit === 0 ? 'Perdido' : 'Ganado'}</Text>
                    </>
                  )}
                </View>
              </View>
              <View style={styles.graph}>
                <GraphBet
                  bets={bets}
                  userId={props.userId}
                />
              </View>
            </ScrollView>
          </View>
        </View>  
       </Modal>
    </>
  )
}

const styles = StyleSheet.create({
  head: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    backgroundColor: '#D20A46',
    width: '100%',
    padding:10
  },
  contain: {
    backgroundColor: '#F8F8FA',
    height: '100%',
    paddingHorizontal: 10,
    paddingTop: 10
  },
  view: {
    width: '100%',
    alignItems: 'center'
  },
  match: {
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
  info: {
    flexDirection: 'row',
    height: 100,
  },
  day: {
    width: '30%',
    alignItems: 'flex-end',
    padding: 10,
    justifyContent: 'center',
    margin: 2,
    marginBottom: 10,
    borderTopLeftRadius: 15,
    backgroundColor: 'white'
  },
  city: {
    width: '68%',
    alignItems: 'flex-start',
    padding: 10,
    justifyContent: 'center',
    margin: 2,
    marginBottom: 10,
    borderTopRightRadius: 15,
    backgroundColor: 'white'
  },
  status: {
    width: '99%',
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    marginBottom: 10,
    backgroundColor: 'white'
  },
  result: {
    width: '99%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 60,
    backgroundColor: 'white'
  },
  exit: {
      backgroundColor: '#FFF',
      height: 30,
      width: 30,
      borderRadius: 10,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
  },
  modalStyle: {
    backgroundColor: 'white',
    marginHorizontal: 15,
    height: 450,
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 2,
    overflow: 'hidden'
  },
  modalContainerStyle: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'transparent',
    backgroundColor: 'black',
    opacity: 0.9
  },
  graph: {
    marginTop: 15,
    marginBottom: 15,
    alignItems: 'center',
    height: 350,
  },

})