/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { AgencyCard } from './src/components/AgencyCard/AgencyCard';
import { ScrollView, StyleSheet } from 'react-native';


function App() { 
  return (
    <SafeAreaProvider>      
      <SafeAreaView style={styles.safeArea}>     
        <ScrollView 
          style={styles.scrollView} 
          contentContainerStyle={styles.scrollContent}>
          <AgencyCard />
          <AgencyCard />
          <AgencyCard />
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

export const styles = StyleSheet.create({
 
  safeArea: {
    flex: 1,
    backgroundColor: '#fff', 
  },
  
  scrollView: {
    flex: 1,
  },
  
  scrollContent: {
    flexDirection: 'column',
    gap: 16, 
    paddingHorizontal: 16, 
  },
});

export default App;