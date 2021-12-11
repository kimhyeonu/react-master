import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import PostFeedScreen from './PostFeedScreen';
import PostScreen from './PostScreen';
import ProfileScreen from './ProfileScreen';

const Stack = createNativeStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="PostFeed"
        component={PostFeedScreen}
        options={{ title: '포스트 피드' }}
      />
      <Stack.Screen
        name="Post"
        component={PostScreen}
        options={{ title: '포스트' }}
      />
      <Stack.Screen name="Profile" component={ProfileScreen} />
    </Stack.Navigator>
  );
}

export default HomeStack;
