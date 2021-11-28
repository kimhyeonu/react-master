import React, { useRef, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { signIn, signUp } from '../lib/auth';
import AuthForm from '../components/AuthForm';
import AuthButtons from '../components/AuthButtons';

function AuthScreen({ route }) {
  const { isSignUp } = route.params ?? {};

  const [form, setForm] = useState({
    email: '',
    password: '',
    passwordConfirm: '',
  });
  const [loading, setLoading] = useState();

  const onChangeText = (name) => (value) => {
    setForm({
      ...form,
      [name]: value,
    });
  };

  const onSubmit = async () => {
    Keyboard.dismiss();

    const { email, password, passwordConfirm } = form;

    if (isSignUp && password !== passwordConfirm) {
      Alert.alert(
        '인증 실패',
        '패스워드와 패스워드 확인이 서로 일치하지 않습니다.'
      );
      return;
    }

    const info = { email, password };

    setLoading(true);

    try {
      const { user } = isSignUp ? await signUp(info) : await signIn(info);
      console.log(user);
    } catch (e) {
      const messages = {
        'auth/email-already-in-use': '이미 가입된 이메일입니다.',
        'auth/wrong-password': '잘못된 패스워드입니다.',
        'auth/user-not-found': '존재하지 않는 계정입니다.',
        'auth/invalid-email': '유효하지 않은 이메일입니다.',
      };
      const alertMessage =
        messages[e.code] || `${isSignUp ? '가입' : '접속'} 실패`;

      Alert.alert('인증 실패', alertMessage);
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.keyboardAvoidingView}
      behavior={Platform.select({ ios: 'padding' })}
    >
      <SafeAreaView style={styles.fullscreen}>
        <Text style={styles.text}>Public Gallery</Text>

        <View style={styles.form}>
          <AuthForm
            form={form}
            isSignUp={isSignUp}
            onSubmit={onSubmit}
            onChangeText={onChangeText}
          />

          <AuthButtons
            isSignUp={isSignUp}
            onSubmit={onSubmit}
            loading={loading}
          />
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  keyboardAvoidingView: {
    flex: 1,
  },
  fullscreen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  form: {
    marginTop: 64,
    paddingHorizontal: 16,
    width: '100%',
  },
  buttons: {
    marginTop: 64,
  },
});

export default AuthScreen;
