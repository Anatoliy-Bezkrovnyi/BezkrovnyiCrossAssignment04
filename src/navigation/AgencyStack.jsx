import * as React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen/HomeScreen';
import AgencyDetailsScreen from './screens/AgencyDetailsScreen/AgencyDetailsScreen';

const Stack = createStackNavigator();

const AgencyStack = () => {
  return (
    
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Welcome' }}
        />
        <Stack.Screen name="Details" component={AgencyDetailsScreen} />
      </Stack.Navigator>
    
  );
};

export default AgencyStack;