import React from "react";
import { Formik, useField } from "formik";
import { View, StyleSheet, TouchableOpacity, Text, Alert } from 'react-native';
import StyledTextInput from "./styled-screen/StyledTextInput";
import { loginValidationSchema } from "../validation-schemas/login.js";
import { loginUser } from "../controller/loginController"

const initialValues = {
  email: '',
  pass: ''
}


const FormikInputValue = ({ name, ...props}) => {

  const [field, meta, helpers] = useField(name)

  return (
    <>
    <StyledTextInput
      error={meta.error}
      value={field.value}
      onChangeText={value => helpers.setValue(value)}
      {...props}
      />
    {meta.error && <Text style={styles.error}>{meta.error}</Text>}
    </>
  )
}

const onPressSubmite = async (input) => {
  const { email, pass } = input;
  const messsage = await loginUser({email, pass})
  if(messsage.error){
    Alert.alert(
      'ERROR',
      messsage.error,
      [
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ]
    )
  }
}

export default function LoginScreen ({navigation}) {
  return (
    <Formik validationSchema={loginValidationSchema} initialValues={initialValues} onSubmit={onPressSubmite}>
      {({handleSubmit}) => {
        return (
          <View>
            <Text style={styles.title}>¡Bienvenido!</Text>
            <View style={styles.container}>
              <FormikInputValue
                name='email'
                placeholder='Correo Electrinico'
              />
              <FormikInputValue
                name='pass'
                placeholder='Contraseña'
                secureTextEntry
                />
            </View>
            <TouchableOpacity
              onPress={handleSubmit}
              style={styles.touchableOpacity}
            >
              <Text style={{color: '#7A7A7A'}}>Ingresar</Text>
            </TouchableOpacity>
          </View>
        )
      }}
    </Formik>
  )
}



const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: '#E2E8F0',
    padding: 20,
    borderRadius: 15,
    marginVertical: 20
  },
  error: {
    color: 'red',
    fontSize: 12,
    marginTop: -5,
    marginBottom: 20
  },
  title: {
    fontSize: 30,
    textAlign: 'center'
  },
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
