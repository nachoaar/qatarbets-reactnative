import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { useSelector } from "react-redux";
import { Logout } from "../screens/Logout";
import headerImg from "../../assets/header.png"

export default function Header () {

  const user = useSelector((store) => store.user?.user)

  return (
    <>
      <View style={styles.container}>
        <Image
          source={headerImg}
          style={ {height: 100, width: 170, resizeMode: 'contain' } } 
        />
        <View style={styles.user}>
          <Text>{`Bienvenido, ${user.name}`}</Text>
          <Logout />
        </View>
      </View>
    </>
  )

}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F8F8FA',
    height: 140,
    paddingHorizontal: 25,
    paddingBottom:10,
    alignItems:'center',
    justifyContent:'center',
    borderBottomWidth: 1,
    borderBottomColor: '#E4E4E4'
  },
  user: {
    flexDirection: 'row',
    width: '100%',
    alignItems:'center',
    justifyContent: 'space-between'
  }
})
