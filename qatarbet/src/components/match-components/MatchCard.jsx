import { View, Text, TouchableWithoutFeedback, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import MatchModal from './MatchModal';

export default function MatchCard(props) {

  let date = new Date(props.date);

  date = date.toLocaleDateString("es-AR", {
    weekday: "long",
    day: "numeric",
    month: "numeric",
    year: "numeric",
  });

  let hora = new Date(props.date)

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
              <Text style={styles.condition}>{date}</Text>
              <Text>{`${props.home_team} vs ${props.away_team}`}</Text>
              <Text>{props.status}</Text>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
      <MatchModal 
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
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
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  condition: {
    width:'100%',
    textAlign:'center',
    paddingVertical: 5,
    height: 30,
    borderBottomWidth: 1,
    borderBottomColor: '#F8F8FA'
  }
})