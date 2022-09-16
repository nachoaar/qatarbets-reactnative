import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Text, View } from "react-native";
import { getGamblers } from '../redux/actions/gambler/gamblerActions'


export default function UserScreen () {

  const dispatch = useDispatch();
  const { gamblers } = useSelector((store) => store.gambler)
  const { gamblerName } = useSelector((store) => store.gambler)

  useEffect(() => {
    if(gamblers.length === 0){
      dispatch(getGamblers());
    }
    return () => {
      dispatch(CacheDashGambler());
    }
  }, [dispatch, gamblers])

  return (
    <View>
      <Text>aca van los gambler</Text>
    </View>
  )

}
