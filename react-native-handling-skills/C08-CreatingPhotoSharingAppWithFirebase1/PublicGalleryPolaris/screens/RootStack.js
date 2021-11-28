import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { useMemberContext } from '../contexts/MemberContext';
import AuthScreen from './AuthScreen';
import WelcomeScreen from './\bWelcomeScreen';
import MainTab from './MainTab/MainTab';

const Stack = createNativeStackNavigator();

function RootStack() {
  const { member } = useMemberContext();

  return (
    <Stack.Navigator>
      {member ? (
        <>
          <Stack.Screen
            name="MainTab"
            component={MainTab}
            options={{ headerShown: false }}
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
