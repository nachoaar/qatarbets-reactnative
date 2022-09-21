import { View, Text, Modal, StyleSheet, ScrollView } from 'react-native'
import React from 'react'

import Icon from 'react-native-vector-icons/Ionicons';
import { GraphMatch } from '../../screens/graph/GraphMatch';

export default function MatchModal(props) {
   
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
                  <Text style={{fontSize: 18, fontWeight: 'bold'}}>{`${props.home_team} vs ${props.away_team}`}</Text>
                </View>
                <View style={styles.info}>
                  <View style={styles.day}>
                    <Icon name='calendar-outline' size={25}/>
                    <Text>{props.date}</Text>
                    <Text>{`${props.hour.getHours()}:00 hs`}</Text>
                  </View>
                  <View style={styles.city}>
                    <Icon name='trail-sign-outline' size={25}/>
                    <Text>{props.city}</Text>
                    <Text>{props.stadium_name}</Text>
                  </View>
                </View>
                <View style={styles.status}>
                  <Text>{props.status}</Text>
                </View>
                <View style={styles.result}>
                  <Text style={{fontWeight: 'bold'}}>{props.result_match === null ? '-' : props.result_match}</Text>
                  {props.result_match === null ? (
                    <Text> </Text>
                  ) : (
                    <>
                      <Icon style={{marginHorizontal: 15}} name='checkmark-circle-outline' size={25} color={'green'}/>
                      <Text>{props.result_match === 'away' ? props.away_team : props.result_match === 'tie' ? 'empate' : props.home_team}</Text>
                    </>
                  )}
                </View>
              </View>
              <View style={styles.graph}>
                <GraphMatch
                  home_group_points={props.home_group_points}
                  home_code={props.home_code}
                  away_group_points={props.away_group_points}
                  away_code={props.away_code}
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
    height: 60,
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
  },

})