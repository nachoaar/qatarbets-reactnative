import { View, Text, Modal, StyleSheet } from 'react-native'
import React from 'react'
import { Graph } from '../../screens/graph/Graph'

export default function BetModal({modalOpen, setModalOpen}) {
   
  return (
    <>
      <Modal
        visible={modalOpen}
        transparent={true}
        animationType={'fade'}
      >
        <View style={styles.modalContainerStyle}>
          <View style={styles.modalStyle}>
            <View style={styles.head}>
              <Text>Hello</Text>
              <View style={styles.exit}>
                <Text  onPress={() => setModalOpen(!setModalOpen)}> x </Text>
              </View>
            </View>
            <View style={styles.contain}>
              <Text>Details</Text>
              <Graph />
            </View>
          </View>
        </View>  
       </Modal>
    </>
  )
}

const styles = StyleSheet.create({
  head: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    marginHorizontal: 30,
  },
  contain: {
    backgroundColor: 'white',
    height: '100%',
    paddingHorizontal: 30,
    paddingTop: 10
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
    backgroundColor: '#F8F8FA',
    marginHorizontal: 15,
    height: 600,
    borderTopRightRadius: 16,
    borderTopLeftRadius: 16,
    paddingVertical: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 2
  },
  modalContainerStyle: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'black',
    opacity: 0.9
  }
})