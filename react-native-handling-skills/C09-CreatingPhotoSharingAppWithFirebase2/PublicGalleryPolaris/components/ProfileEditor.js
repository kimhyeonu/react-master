import React, { useState } from 'react';
import {
  View,
  Pressable,
  Image,
  ActivityIndicator,
  StyleSheet,
  Platform,
} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { launchImageLibrary } from 'react-native-image-picker';
import storage from '@react-native-firebase/storage';

import { signOut } from '../lib/auth';
import { createMember } from '../lib/members';
import { useMemberContext } from '../contexts/MemberContext';
import BorderedInput from './BorderedInput';
import CustomButton from './CustomButton';

function ProfileEditor() {
  const navigation = useNavigation();
  const { params } = useRoute();

  const { uid } = params || {};
  const [profileImage, setProfileImage] = useState(null);
  const [nickname, setNickname] = useState('');
  const { setMember } = useMemberContext();

  const [loading, setLoading] = useState(false);

  const onSubmit = async () => {
    let profileImageUrl = null;

    setLoading(true);

    try {
      if (profileImage) {
        const asset = profileImage.assets[0];
        const extension = asset.fileName.split('.').pop();
        const reference = storage().ref(
          `/member-profile-images/${uid}.${extension}`
        );

        if (Platform.OS === 'android') {
          await reference.putString(asset.base64, 'base64', {
            contentType: asset.type,
          });
        } else {
          await reference.putFile(asset.uri);
        }

        profileImageUrl = profileImage
          ? await reference.getDownloadURL()
          : null;
      }

      const member = {
        id: uid,
        nickname,
        profileImageUrl,
      };

      createMember(member);
      setMember(member);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  const onCancel = () => {
    signOut();
    navigation.goBack();
  };

  const onSelectImage = () => {
    launchImageLibrary(
      {
        mediaType: 'photo',
        maxWidth: 512,
        maxHeight: 512,
        includeBase64: Platform.OS === 'android',
      },
      (image) => {
        if (image.didCancel) {
          return;
        }
        setProfileImage(image);
      }
    );
  };

  return (
    <View style={styles.block}>
      <Pressable onPress={onSelectImage}>
        <Image
          style={styles.photoCircle}
          source={
            profileImage
              ? { uri: profileImage?.assets[0]?.uri }
              : require('../assets/images/default-profile-image.png')
          }
        />
      </Pressable>

      <View style={styles.form}>
        <BorderedInput
          placeholder="닉네임"
          value={nickname}
          onChangeText={setNickname}
          onSubmitEditing={onSubmit}
          returnKeyType="next"
        />

        {loading ? (
          <ActivityIndicator size={32} color="#6200ee" style={styles.spinner} />
        ) : (
          <View style={styles.buttons}>
            <CustomButton title="다음" hasMarginBottom onPress={onSubmit} />
            <CustomButton title="취소" theme="secondary" onPress={onCancel} />
          </View>
        )}
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
  spinner: {
    marginTop: 48,
    height: 104,
  },
});

export default ProfileEditor;
