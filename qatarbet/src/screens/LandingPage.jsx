import React, { useEffect } from "react";
import { StyleSheet, Image, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import Logo from "../../assets/logo.png"
import { getBets } from "../redux/actions/bet/betActions";
import { getGamblers } from "../redux/actions/gambler/gamblerActions";
import { getMatches } from "../redux/actions/match/matchAction";


import StyledTouchableOpacity from "./styled-screen/StyledTouchableOpacity";

const LandingPage = ({ navigation }) => {

  // const dispatch = useDispatch();

  // const {gamblers} = useSelector((store) => store.gambler)
  // const {matches} = useSelector((store) => store.matches)
  // const {bets} = useSelector((store) => store.bets)

  // useEffect(() => {
  //   if(gamblers.length === 0 ) {
  //     dispatch(getGamblers());
  //   }
  //   if(matches.length === 0) {
  //     dispatch(getMatches());
  //   }
  //   if(matches.length === 0) {
  //     dispatch(getBets());
  //   }
  // })

  // console.log('!!!!gamblers', gamblers.length);
  // console.log('!!!!matches', matches.length);
  // console.log('!!!!bets', bets.length);

  return (
    <View style={styles.container}>
      <Image
        source={Logo}
        style={ {height: 250, width: 250, resizeMode: 'contain' } } />
      <StyledTouchableOpacity
        onPress={() => {
          navigation.navigate('Login')
        }}
      >
        <Text style={{color: '#7A7A7A'}}>Acceder</Text>
      </StyledTouchableOpacity>
    </View>
  )
}

export default LandingPage;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white'
  }
})