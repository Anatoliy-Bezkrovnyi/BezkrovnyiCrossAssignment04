import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../../Screens/HomeScreen';
import MessagesScreen from '../../Screens/MessagesScreen';
import MapScreen from '../../Screens/MapScreen';
import TasksScreen from '../../Screens/TasksScreen';
import ProfileScreen from '../../Screens/ProfileScreen';

const Tab = createBottomTabNavigator();

const TabMenu = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Messages" component={MessagesScreen} />
      <Tab.Screen name="Map" component={MapScreen} />
      <Tab.Screen name="Tasks" component={TasksScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default TabMenu;