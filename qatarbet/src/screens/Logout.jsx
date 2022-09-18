import React from 'react'
import { View } from "react-native"
import { useDispatch } from 'react-redux'
import { logout } from '../redux/actions/user/userActions'


export const Logout = () => {

  const dispatch = useDispatch()

const onPressFunction = () => {
  dispatch(logout())
}

  return (
    <View>
      <Pressable onPress={onPressFunction}>
        <Text>Cerrar Sesión</Text>
      </Pressable>
    </View>
  )
}
