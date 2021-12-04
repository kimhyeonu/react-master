import React, { useRef } from 'react';

import BorderedInput from './BorderedInput';

function AuthForm({ form, isSignUp, onSubmit, onChangeText }) {
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();

  return (
    <>
      <BorderedInput
        hasMarginBottom
        placeholder="이메일"
        value={form.email}
        onChangeText={onChangeText('email')}
        autoCapitalize="none"
        autoCorrect={false}
        autoCompleteType="email"
        keyboardType="email-address"
        returnKeyType="next"
        onSubmitEditing={() => passwordRef.current.focus()}
      />
      <BorderedInput
        hasMarginBottom={isSignUp}
        placeholder="패스워드"
        value={form.password}
        onChangeText={onChangeText('password')}
        secureTextEntry
        ref={passwordRef}
        returnKeyType={isSignUp ? 'next' : 'done'}
        onSubmitEditing={() => {
          if (isSignUp) {
            passwordConfirmRef.current.focus();
          } else {
            onSubmit();
          }
        }}
      />
      {isSignUp && (
        <BorderedInput
          placeholder="패스워드 확인"
          value={form.passwordConfirm}
          onChangeText={onChangeText('passwordConfirm')}
          secureTextEntry
          ref={passwordConfirmRef}
          returnKeyType="done"
          onSubmitEditing={onSubmit}
        />
      )}
    </>
  );
}

export default AuthForm;
