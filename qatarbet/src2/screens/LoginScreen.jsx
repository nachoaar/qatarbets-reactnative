import React from "react";
import { Formik, useField } from "formik";
import { View, StyleSheet, Text, Button } from 'react-native';

import StyledTextInput from "./styled-screen/StyledTextInput";

import { loginValidationSchema } from "../validation-schemas/login.js";

const initialValues = {
  email: '',
  password: ''
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


export default function LoginScreen () {
  return (
    <Formik validationSchema={loginValidationSchema} initialValues={initialValues} onSubmit={values => console.log(values)}>
      {({handleSubmit}) => {
        return (
          <View>
            <Text style={styles.title}>¡Bienvenido!</Text>
            <View style={styles.container}>
              <FormikInputValue 
                name='email'
                placeholder='E-mail'
              />
              <FormikInputValue
                name='password'
                placeholder='Password'
                secureTextEntry
                />
            </View>
            <Button color="#D20A46" onPress={handleSubmit} title='Ingresar' />
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
  }
})