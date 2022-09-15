import React from 'react';
import { StyleSheet, View } from 'react-native';

import StackNavigation from './src/navigation/StackNavigation';
import TabNavigation from './src/navigation/TabNavigation';


import { Provider } from 'react-redux';
import store from './src/redux/store';



export default function App() {

  const RootApp = () => {
    return (
      <View style={styles.container}>
        {/* <StackNavigation /> */}
        <TabNavigation />
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
