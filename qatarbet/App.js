import React from 'react';
import { StyleSheet, View } from 'react-native';

import Navigation from './src/navigation/Navigation';

import { Provider } from 'react-redux';
import store from './src/redux/store';



export default function App() {

  const RootApp = () => {
    return (
      <View style={styles.container}>
        <Navigation />
      </View>
    )
  }

  return (
    <Provider store={store}>
      <RootApp />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
