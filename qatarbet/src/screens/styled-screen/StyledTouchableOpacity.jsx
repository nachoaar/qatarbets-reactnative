import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

const styles = StyleSheet.create({
  touchableOpacity: {
    borderWidth: 2,
    borderColor: "#FF003F",
    width: 150,
    alignItems: "center",
    padding: 15,
    borderRadius: 50,
    alignSelf: 'center'
  },
})

const StyledTouchableOpacity = ({ style = {}, ...props}) => {
  const touchableStyle = [
    styles.touchableOpacity,
    style
  ]

  return <TouchableOpacity style={touchableStyle} {...props} />
}

export default StyledTouchableOpacity