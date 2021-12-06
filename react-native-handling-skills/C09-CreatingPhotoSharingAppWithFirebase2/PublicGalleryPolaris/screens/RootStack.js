import React, { useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { subscribeAuth } from '../lib/auth';
import { readMember } from '../lib/members';
import { useMemberContext } from '../contexts/MemberContext';
import AuthScreen from './AuthScreen';
import WelcomeScreen from './WelcomeScreen';
import PostCreatingScreen from './PostCreatingScreen';
import MainTab from './MainTab/MainTab';

const Stack = createNativeStackNavigator();

function RootStack() {
  const { member, setMember } = useMemberContext();

  useEffect(() => {
    const unsubscribe = subscribeAuth(async (currentMember) => {
      unsubscribe();

      if (!currentMember) {
        return;
      }

      const profile = await readMember(currentMember.uid);
      if (!profile) {
        return;
      }

      setMember(profile);
    });
  }, [setMember]);

  return (
    <Stack.Navigator>
      {member ? (
        <>
          <Stack.Screen
            name="MainTab"
            component={MainTab}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="PostCreating"
            component={PostCreatingScreen}
            options={{
              title: '새 게시물',
              headerBackTitle: '뒤로 가기',
            }}
          />
        </>
      ) : (
        <>
          <Stack.Screen
            name="Auth"
            component={AuthScreen}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Welcome"
            component={WelcomeScreen}
            options={{
              headerShown: false,
            }}
          />
        </>
      )}
    </Stack.Navigator>
  );
}

export default RootStack;
