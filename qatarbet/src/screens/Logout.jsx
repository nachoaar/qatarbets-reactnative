import React from 'react'
import { Pressable, View, Text } from "react-native"
import { useDispatch } from 'react-redux'
import { authUser } from '../redux/actions/user/authUser'
import { logout } from '../redux/actions/user/userActions'

export const Logout = ({navigation}) => {

  const dispatch = useDispatch()

const onPressFunction = async () => {
  dispatch(logout())
  const info = await authUser.getStoreData();
  console.log(info);
  navigation.navigate('Landing');
}

  return (
    <View>
      <Pressable onPress={onPressFunction}>
        <Text>Cerrar Sesión</Text>
      </Pressable>
    </View>
  )
}
