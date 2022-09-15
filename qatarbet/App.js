import React from 'react';
import { StyleSheet, View } from 'react-native';

import Navigation from './src/navigation/Navigation';

function App() {
  return (
    <View style={styles.container}>
      <Navigation />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default App;