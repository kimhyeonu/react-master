import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import PostFeedScreen from './PostFeedScreen';

const Stack = createNativeStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="PostFeed" component={PostFeedScreen} />
    </Stack.Navigator>
  );
}

export default HomeStack;
