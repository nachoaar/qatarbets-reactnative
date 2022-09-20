import React, { useState } from "react";
import { useDispatch } from "react-redux"
import { StyleSheet, View, TextInput, Pressable, Text } from "react-native";
import { getGamblerName } from "../redux/actions/gambler/gamblerActions"

export default function Searchbar () {

  const [name, setName] = useState();
  const dispatch = useDispatch();

  const onPressSubmite = async (input) => {
    if(input  !== undefined){
      dispatch(getGamblerName(input))
      setName('')
    }
  }

  // const onPressSubmiteCache = async () => {
  //   dispatch(cacheDashGambler())
  // }

  return (
    <View style={styles.container}>
      <View style={styles.search}>
        <TextInput
          style={styles.input}
          onChangeText={setName}
          value={name}
          placeholder="Buscar usuario"
        />
        <Pressable
          onPress={() => onPressSubmite(name)}
        >
          <Text>Search</Text>
        </Pressable>
      </View>
      {/* <Button
        title="buscar"
        onPress={() => onPressSubmite(name)}
        color="#f194ff"
        style={styles.button}
      /> */}
      {/* <Button
        title="Todos"
        onPress={() => onPressSubmiteCache()}
      /> */}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: '70%',
    borderRadius: 10,
    borderColor:'#E4E4E4'
  },
  search: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
