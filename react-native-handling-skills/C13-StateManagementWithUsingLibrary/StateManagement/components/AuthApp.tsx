import React from 'react';
import { View, SafeAreaView, Text, Button, StyleSheet } from 'react-native';

import useAuthActions from '../hooks/useAuthActions';
import useUser from '../hooks/useUser';

function AuthStatus() {
  const user = useUser();

  return (
    <View style={styles.status}>
      <Text style={styles.text}>
        {user ? user.name : '아래 버튼을 눌러 접속하세요.'}
      </Text>
    </View>
  );
}

function AuthButtons() {
  const { signin, signout } = useAuthActions();

  const onPressSignin = () => {
    signin({
      id: 1,
      name: 'Kim Hyeonu ',
      nickname: 'polaris',
    });
  };

  const onPressSignout = () => {
    signout();
  };

  return (
    <View>
      <Button
        title="접속"
        onPress={() => {
          onPressSignin();
        }}
      />
      <Button
        title="접속 해제"
        onPress={() => {
          onPressSignout();
        }}
      />
    </View>
  );
}

function AuthApp() {
  return (
    <SafeAreaView style={styles.block}>
      <AuthStatus />
      <AuthButtons />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  block: {
    flex: 1,
  },
  status: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
  },
});

export default AuthApp;
