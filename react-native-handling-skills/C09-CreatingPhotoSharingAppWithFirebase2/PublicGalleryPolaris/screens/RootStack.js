import React, { useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from 'react-native-splash-screen';

import { subscribeAuth } from '../lib/auth';
import { readMember } from '../lib/members';
import { useMemberContext } from '../contexts/MemberContext';
import AuthScreen from './AuthScreen';
import WelcomeScreen from './WelcomeScreen';
import PostCreatingScreen from './PostCreatingScreen';
import PostEditingScreen from './PostEditingScreen';
import SettingScreen from './SettingScreen';
import MainTab from './MainTab/MainTab';

const Stack = createNativeStackNavigator();

function RootStack() {
  const { member, setMember } = useMemberContext();

  useEffect(() => {
    const unsubscribe = subscribeAuth(async (currentMember) => {
      unsubscribe();

      if (!currentMember) {
        SplashScreen.hide();
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
              title: '새 포스트',
              headerBackTitle: '뒤로 가기',
            }}
          />
          <Stack.Screen
            name="PostEditing"
            component={PostEditingScreen}
            options={{
              title: '포스트 수정',
              headerBackTitle: '뒤로 가기',
            }}
          />
          <Stack.Screen
            name="Setting"
            component={SettingScreen}
            options={{
              title: '설정',
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
