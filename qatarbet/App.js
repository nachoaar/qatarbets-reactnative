import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { LandingPage } from './src/Components/LandingPage/LandingPage'

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <LandingPage />
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
