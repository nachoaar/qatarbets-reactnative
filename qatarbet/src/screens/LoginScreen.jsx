import React from "react";
import { Formik, useField } from "formik";
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';

import StyledTextInput from "./styled-screen/StyledTextInput";
import StyledTouchableOpacity from "./styled-screen/StyledTouchableOpacity";

import { loginValidationSchema } from "../validation-schemas/login.js";

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


export default function LoginScreen ({navigation}) {
  return (
    <Formik validationSchema={loginValidationSchema} initialValues={initialValues} onSubmit={values => console.log(values)}>
      {({handleSubmit}) => {
        return (
          <View style={styles.container}>
            <Text style={styles.title}>¡Bienvenido!</Text>
            <View style={styles.login}>
              <FormikInputValue
                name='email'
                placeholder='Correo electrónico'
              />
              <FormikInputValue
                name='pass'
                placeholder='Contraseña'
                secureTextEntry
                />
            </View>
            <StyledTouchableOpacity
              onPress={handleSubmit}
            >
              <Text style={{color: '#7A7A7A'}}>Ingresar</Text>
            </StyledTouchableOpacity>
          </View>
        )
      }}
    </Formik>
  )
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white'
  },
  login: {
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
    textAlign: 'center',
    color: '#FF003F'
  }
})
