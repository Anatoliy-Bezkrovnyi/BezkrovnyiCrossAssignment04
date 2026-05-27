/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import TabMenu from './src/navigation/TabMenu';
import {  StyleSheet } from 'react-native';


function App() { 
  return (
    <SafeAreaProvider>      
      <SafeAreaView style={styles.safeArea}>     
        <TabMenu />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

export const styles = StyleSheet.create({
 
  safeArea: {
    flex: 1,
    backgroundColor: '#fff', 
  }, 
});

export default App;