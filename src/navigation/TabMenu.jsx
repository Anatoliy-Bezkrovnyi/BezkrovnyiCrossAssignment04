import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../../navigation/screens/HomeScreen';
import MessagesScreen from '../../navigation/screens/MessagesScreen';
import TasksScreen from '../../navigation/screens/TasksScreen';
import ProfileScreen from '../../navigation/screens/ProfileScreen';

const Tab = createBottomTabNavigator();

const TabMenu = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Messages" component={MessagesScreen} />
      <Tab.Screen name="Tasks" component={TasksScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default TabMenu;