import React from "react";
import { StyleSheet, TextInput } from "react-native";

const styles = StyleSheet.create({
  textInput: {
    width: 300,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginBottom: 10
  },
  error: {
    borderColor: 'red'
  }
})

const StyledTextInput = ({ style = {}, error, ...props}) => {
  const inputStyle = [
    styles.textInput,
    style,
    error && styles.error
  ]

  return <TextInput style={inputStyle} {...props} />
}

export default StyledTextInput