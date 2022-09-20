import React, { useState } from "react";
import { useDispatch } from "react-redux"
import { StyleSheet, Button, View, TextInput } from "react-native";
import { getGamblerName, cacheDashGambler } from "../redux/actions/gambler/gamblerActions"
import { SearchBar } from "react-native-screens";

export default function Searchbar () {

  const [name, setName] = useState();
  const dispatch = useDispatch();

  const onPressSubmite = async (input) => {
    if(input  !== undefined){
      dispatch(getGamblerName(input))
    }
  }

  const onPressSubmiteCahe = async () => {
    dispatch(cacheDashGambler())
  }

  cacheDashGambler
  return (
    <View>
      <TextInput
        style={styles.input}
        onChangeText={setName}
        value={name}
        placeholder="Buscar Gambler"
      />
      <Button
        title="buscar"
        onPress={() => onPressSubmite(name)}
      />
      <Button
        title="Todos"
        onPress={() => onPressSubmiteCahe()}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  }
})
