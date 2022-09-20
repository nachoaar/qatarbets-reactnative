import { View, Text, StyleSheet, FlatList, Pressable } from 'react-native'
import React, { useState } from 'react'
import MatchCard from './MatchCard';
import SelectList from 'react-native-dropdown-select-list';
import { useDispatch } from 'react-redux';
import { filterMatchesStatus } from '../../redux/actions/match/matchAction';

export default function MatchList(props) {

  const dispatch = useDispatch()

  const [selected, setSelected] = useState('');

  const data = [
    {key:'Finished', value:'Finished'},
    {key:'Not Started', value:'Not Started'},
    {key:'All Matches', value:'All Matches'},
  ]

  const onPressFinished = () => {
      dispatch(filterMatchesStatus(selected));
  }

  // console.log(selected);

  return (
    <>
      <View style={styles.container}>
        <View style={styles.betNum}>
          <Text>Total de partidos:</Text>
          <View style={styles.num}>
            <Text>{props.matchs?.length}</Text>
          </View>
        </View>
        <SelectList 
          data={data} 
          setSelected={setSelected}
          placeholder='Filter'
          boxStyles={styles.filter}
          inputStyles={styles.filterText}
          dropdownStyles={styles.dropdownFilter}
          onSelect={() => onPressFinished()}
          search={false}
          defaultOption={{key:'All Matches', value:'All Matches'}}
        />
      </View>
      <FlatList 
        data={props.matchs}
        numColumns={2}
        keyExtractor={(match) => match.id}
        showsVerticalScrollIndicator={false}
        renderItem={({ item : matchs}) => (
          <MatchCard 
            id={matchs.id}
            date={matchs.date}
            status={matchs.status}
            home_team={matchs.home_team.name}
            away_team={matchs.away_team.name}
            result_match={matchs.result_match}
            stadium_name={matchs.stadium_name}
            city={matchs.city}
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
    marginVertical: 20,
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
    backgroundColor: '#FFF',
    height: 30,
    width: 30,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  filter: {
    width: 150,
    height: 40,
    borderWidth: 0,
    position: 'relative',    
  },
  filterText: {
    fontSize: 12
  },
  dropdownFilter: {
    position: 'absolute',
    backgroundColor: 'white'
  }
})