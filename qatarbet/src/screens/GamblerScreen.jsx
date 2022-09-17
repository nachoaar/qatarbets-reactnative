import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Text, View } from "react-native";
import { getGamblers, cacheDashGambler } from '../redux/actions/gambler/gamblerActions'
import { getAllBets } from '../redux/actions/bet/betAction'


export default function UserScreen () {

  const dispatch = useDispatch();
  const { gamblers } = useSelector((store) => store.gambler)
  const { gamblerName } = useSelector((store) => store.gambler)
  const { bets } = useSelector((store) => store.bets)

  console.log('son los usuarios 16:', gamblers);
  console.log('usuario por nombre:', gamblerName);
  console.log('son las apuestas 18:', bets);


  useEffect(() => {
    if(bets.length === 0){
      dispatch(getAllBets())
    }
    if(gamblers.length === 0){
      dispatch(getGamblers());
    }
    return () => {
      dispatch(cacheDashGambler());
    }
  }, [dispatch, gamblers])

  return (
    <View>
      <Text>aca van los gambler</Text>
    </View>
  )

}
