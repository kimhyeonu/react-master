import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

import { signOut } from '../lib/auth';
import { createMember } from '../lib/members';
import BorderedInput from './BorderedInput';
import CustomButton from './CustomButton';

function ProfileEditor() {
  const navigation = useNavigation();
  const { params } = useRoute();

  const { uid } = params || {};
  const [nickname, setNickname] = useState('');

  const onSubmit = () => {
    createMember({
      id: uid,
      displayName: nickname,
      photoURL: null,
    });
  };

  const onCancel = () => {
    signOut();
    navigation.goBack();
  };

  return (
    <View style={styles.block}>
      <View style={styles.photoCircle} />

      <View style={styles.form}>
        <BorderedInput
          placeholder="닉네임"
          value={nickname}
          onChangeText={setNickname}
          onSubmitEditing={onSubmit}
          returnKeyType="next"
        />

        <View style={styles.buttons}>
          <CustomButton title="다음" hasMarginBottom onPress={onSubmit} />
          <CustomButton title="취소" theme="secondary" onPress={onCancel} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  block: {
    alignItems: 'center',
    marginTop: 24,
    paddingHorizontal: 16,
    width: '100%',
  },
  photoCircle: {
    width: 128,
    height: 128,
    borderRadius: 64,
    backgroundColor: '#cdcdcd',
  },
  form: {
    marginTop: 16,
    width: '100%',
  },
  buttons: {
    marginTop: 48,
  },
});

export default ProfileEditor;
