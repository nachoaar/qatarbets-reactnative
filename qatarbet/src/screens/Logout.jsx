import React from 'react'
import { Pressable, View, Text } from "react-native"
import { useDispatch } from 'react-redux'
import { authUser } from '../redux/actions/user/authUser'
import { logout } from '../redux/actions/user/userActions'

export const Logout = () => {

  const dispatch = useDispatch()

const onPressFunction = async () => {
  dispatch(logout())
  const info = await authUser.getStoreData();
}

  return (
    <View>
      <Pressable onPress={onPressFunction}>
        <Text>Cerrar Sesión</Text>
      </Pressable>
    </View>
  )
}
