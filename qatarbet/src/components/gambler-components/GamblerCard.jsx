import { View, Text, TouchableWithoutFeedback, StyleSheet, Image } from 'react-native'
import React, { useState } from 'react'
import GamblerModal from './GamblerModal';

export default function GamblerCard({gambler}) {

  const [modalOpen, setModalOpen] = useState(false);

  const handleOnPress = (e) => {
    e.preventDefault();
    setModalOpen(true);
  }

  return (
    <>
      <TouchableWithoutFeedback 
        onPress={(e) => handleOnPress(e)}
      >
        <View style={styles.card}>
          <View style={styles.spacing}>
            <View style={styles.bgStyle}>
              <View style={styles.container}>
                <View style={styles.avatarContainer}>
                  <View style={styles.avatar}>
                    <Image
                      source={{ uri: gambler.avatar }}
                      style={{ width: '100%', height: '100%', }}
                    />
                  </View>
                </View>
                <View style={styles.infoContainer}>
                  <View style={{height: '50%', alignItems: 'center', justifyContent: 'center', backgroundColor: '#D20A46'}}>
                    <Text style={{fontFamily: 'Roboto', textTransform: 'uppercase', fontSize: 15, color:'white'}}>{gambler.name}</Text>
                  </View>
                  <View style={{height: '50%', alignItems: 'center', justifyContent: 'center', borderRightWidth: 1, borderColor: '#E4E4E4', flexDirection: 'row', justifyContent: 'space-around'}}>
                    <Text style={{fontFamily:'Koulen'}}>{gambler.rol}</Text>
                    <Text style={{color: gambler.userbanned === false ? 'green' : 'red'}}>{gambler.userbanned === false ? 'Active' : 'Banned'}</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
      <GamblerModal 
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
        id={gambler.id}
        age={gambler.age}
        avatar={gambler.avatar}
        email={gambler.email}
        emailvalidate={gambler.emailvalidate}
        name={gambler.name}
        rol={gambler.rol}
        userbanned={gambler.userbanned}
      />      
    </>
  )
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    height: 130,
    marginBottom: 5
  },
  spacing: {
    flex: 1,
    padding: 5,
  },
  bgStyle: {
    backgroundColor: '#FFFFFF',
    height: '100%',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    alignItems: 'center',
    justifyContent: 'space-around',
    overflow: 'hidden',
  },
  container: {
    flexDirection: 'row',
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  avatar: {
    height: '100%',
    width: '100%',
    borderTopLeftRadius: 10,
    borderWidth: 3,
    borderColor: '#D20A46',
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center'
  },
  avatarContainer: {
    width: '30%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  infoContainer: {
    height: '100%',
    width: '70%',
    borderTopRightRadius: 6,
    overflow: 'hidden',
    borderBottomWidth: 1,
    borderColor: '#E4E4E4'
  }
})