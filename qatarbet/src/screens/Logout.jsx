import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Pressable, View, Alert } from "react-native"
import Icon from 'react-native-vector-icons/Ionicons';
import { useDispatch } from 'react-redux'
import { authUser } from '../redux/actions/user/authUser'
import { logout } from '../redux/actions/user/userActions'

export const Logout = () => {

  const dispatch = useDispatch()
  const navigation = useNavigation();

const onPressFunction = async (navigation) => {
  Alert.alert(
    '¡adiós!',
    'Vuelve pronto',
    [
      { text: "Salir" }
    ]
  )
  dispatch(logout())
  await authUser.getStoreData();
  navigation.navigate('Landing');
}

  return (
    <View>
      <Pressable onPress={() => onPressFunction(navigation)}>
        <Icon name={'exit-outline'} size={25} color={'#D20A46'}/>
      </Pressable>
    </View>
  )
}
