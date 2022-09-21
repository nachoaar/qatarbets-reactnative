import { View, Text, TouchableWithoutFeedback, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import MatchModal from './MatchModal';
import matchSlice from '../../redux/reducer/matchSlice';

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
              <View style={styles.match}>
                <Text style={{color: '#F8F8FA', fontFamily: 'Roboto',}}>{date}</Text>
              </View>
              <View style={styles.teams}>
                <Text style={{fontFamily: 'Roboto', fontWeight: 'bold', fontSize: 14,}}>{`${props.home_team} vs ${props.away_team}`}</Text>
              </View>
              <View style={styles.status}>
                <Text>{props.status}</Text>
              </View>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
      <MatchModal 
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
        date={date}
        hour={hora}
        status={props.status}
        home_team={props.home_team}
        home_group_points={props.home_group_points}
        home_code={props.home_code}
        away_team={props.away_team}
        away_group_points={props.away_group_points}
        away_code={props.away_code}
        result_match={props.result_match}
        stadium_name={props.stadium_name}
        city={props.city}
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
    justifyContent: 'space-between',
    overflow: 'hidden'
  },
  match: {
    width:'100%',
    backgroundColor: '#D20A46',
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  status: {
    height: 40,
    width: '100%',
    borderWidth: 1,
    borderColor: '#E4E4E4',
    alignItems: 'center',
    justifyContent: 'center'
  },
  teams: {
    width: '100%',
    height: 39,
    alignItems: 'center',
    justifyContent: 'center',
    borderRightWidth: 1,
    borderLeftWidth: 1,
    borderColor: '#E4E4E4'
  }
})