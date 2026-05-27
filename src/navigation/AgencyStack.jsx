import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen/HomeScreen';
import AgencyDetailsScreen from './screens/AgencyDetailsScreen/AgencyDetailsScreen';

const Stack = createStackNavigator();

const AgencyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Welcome' }}
        />
        <Stack.Screen name="Details" component={AgencyDetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AgencyStack;