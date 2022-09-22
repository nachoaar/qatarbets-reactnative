import { View, Text, Modal, StyleSheet, ScrollView, Image } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/Ionicons';
import { GraphBet } from '../../screens/graph/GraphBet';

export default function GamblerModal(props) {
   
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
                <View style={styles.profile}>
                  <View style= {styles.avatarContainer}>
                    <View style={styles.avatar}>
                      <Image
                        source={{ uri: props.avatar }}
                        style={{ width: 100, height: 100, }}
                      />
                    </View>
                  </View>
                  <View>
                    <Text style={{fontSize: 18, fontWeight: 'bold', marginBottom: 4}}>{props.name}</Text>
                    <Text>{props.age} años</Text>
                    <Text>{props.email}</Text>
                    <Text style={{color: props.emailvalidate === false ? 'red' : 'green'}}>{props.emailvalidate === false ? '! email no validado' : 'email validado'}</Text>
                  </View>
                </View>
                <View style={styles.status}>
                  <Icon name={'person-circle-outline'} size={23} />
                  <Text style={{fontSize: 15, fontWeight: 'bold', marginLeft: 10, paddingLeft: 10, borderLeftWidth: 1, borderColor: '#E4E4E4'}}>{props.rol}</Text>
                </View>
                <View style={styles.status}>
                  <Icon name={'alert-circle-outline'} size={23} />
                  <Text style={{color: props.userbanned === false ? 'green' : 'red', marginLeft: 10, paddingLeft: 10, borderLeftWidth: 1, borderColor: '#E4E4E4'}}>{props.userbanned === false ? 'Active' : 'Banned'}</Text>
                </View>
              </View>
              <View style={styles.graph}>
                <GraphBet
                  bets={bets}
                  userId={props.id}
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
  profile: {
    flexDirection: 'row',
    width: '99%',
    backgroundColor: 'white',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    padding: 10,
    marginBottom: 11
  },
  avatar: {
    height: '100%',
    width: 100,
    borderTopLeftRadius: 15,
    borderWidth: 3,
    borderColor: '#D20A46',
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center'
  },
  avatarContainer: {
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10
  },
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
    flexDirection: 'row',
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