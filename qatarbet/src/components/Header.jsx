import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";
import { Logout } from "../screens/Logout";

export default function Header () {

  const user = useSelector((store) => store.user?.user)

  return (
    <>
      <View style={styles.container}>
        <Text>{`Bienvenido, ${user.name}`}</Text>
        <Logout />
      </View>
    </>
  )

}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F8F8FA',
    height: 120,
    paddingHorizontal: 25,
    paddingBottom:10,
    flexDirection: 'row',
    alignItems:'flex-end',
    justifyContent:'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#E4E4E4'
  }
})
