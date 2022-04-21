/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';
import {Provider as PaperProvider} from 'react-native-paper';
import Navigation from './src/navigation';

const App: () => Node = () => {
  return (
    // <SafeAreaView style={styles.appContainer}>
    <PaperProvider>
      <Navigation />
    </PaperProvider>
    // </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: 'black',
  },
});

export default App;
