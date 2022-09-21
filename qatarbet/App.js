import React from 'react';
import { StyleSheet, View } from 'react-native';


import TabNavigation from './src/navigation/TabNavigation';

import { Provider } from 'react-redux';
import store from './src/redux/store';
import { useFonts } from 'expo-font';

export default function App() {

  const RootApp = () => {

    const [loaded] = useFonts({
      'Koulen': require('./assets/fonts/Koulen-Regular.ttf'),
      'Roboto': require('./assets/fonts/Roboto-Regular.ttf'),
    });
  
    if (!loaded) {
      return null;
    }

    return (
      <View style={styles.container}>
        {/* <StackNavigation /> */}
        {/* Dejo TabNavigation comentado para poder ir trabajando mientras se desarrolla el login */}
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
    backgroundColor: '#F8F8FA',
  },
});
