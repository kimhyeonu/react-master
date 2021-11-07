import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../screens/HomeScreen';
import ListScreen from '../screens/ListScreen';
import DetailScreen from '../screens/DetailScreen';

const Stack = createStackNavigator();

const StackNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        cardStyle: {
          backgroundColor: '#ffffff',
        },
      }}
    >
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerTitle: '홈' }}
      />
      <Stack.Screen
        name="List"
        component={ListScreen}
        options={{ headerTitle: '리스트' }}
      />
      <Stack.Screen
        name="Detail"
        component={DetailScreen}
        options={{ headerTitle: '디테일' }}
      />
    </Stack.Navigator>
  );
};

export default StackNavigation;
