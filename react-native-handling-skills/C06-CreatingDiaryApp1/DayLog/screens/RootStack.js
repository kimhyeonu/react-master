import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import MainTab from './MainTab';
import EditorScreen from './EditorScreen';

const Stack = createNativeStackNavigator();

function RootStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MainTab"
        component={MainTab}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Editor" component={EditorScreen} />
    </Stack.Navigator>
  );
}

export default RootStack;
