import React from 'react';
import { StyleSheet, View } from 'react-native';

// login screen
import LoginScreen from './src/screens/LoginScreen';



export default function App() {
  return (
    <View style={styles.container}>
      <LoginScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
