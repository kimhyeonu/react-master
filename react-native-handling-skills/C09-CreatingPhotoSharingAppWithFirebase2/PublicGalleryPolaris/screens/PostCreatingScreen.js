import React, { useRef, useEffect, useState, useCallback } from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  useWindowDimensions,
  Animated,
  Keyboard,
  Platform,
  KeyboardAvoidingView,
} from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import storage from '@react-native-firebase/storage';
import { v4 } from 'uuid';

import { useMemberContext } from '../contexts/MemberContext';
import { createPost } from '../lib/posts';
import RightIconButton from '../components/RightIconButton';

function PostCreatingScreen() {
  const route = useRoute();
  const { res } = route.params || {};
  const navigation = useNavigation();

  const { width } = useWindowDimensions();

  const animation = useRef(new Animated.Value(width)).current;
  const [isKeyboardOpen, setIsKeyboardOpen] = useState(false);

  const [description, setDescription] = useState('');

  const { member } = useMemberContext();

  const onSubmit = useCallback(async () => {
    navigation.pop();

    const asset = res.assets[0];
    const extension = asset.fileName.split('.').pop();
    const reference = storage().ref(
      `/post-images/${member.id}/${v4()}.${extension}`
    );
    if (Platform.OS === 'android') {
      await reference.putString(asset.base64, 'base64', {
        contentType: asset.type,
      });
    } else {
      await reference.putFile(asset.uri);
    }
    const postImageUrl = await reference.getDownloadURL();

    await createPost({ author: member, postImageUrl, description });
  }, [res, member, description, navigation]);

  useEffect(() => {
    const keyboardDidShowEvent = Keyboard.addListener('keyboardDidShow', () =>
      setIsKeyboardOpen(true)
    );
    const keyboardDidHideEvent = Keyboard.addListener('keyboardDidHide', () =>
      setIsKeyboardOpen(false)
    );

    return () => {
      keyboardDidShowEvent.remove();
      keyboardDidHideEvent.remove();
    };
  }, []);

  useEffect(() => {
    Animated.timing(animation, {
      toValue: isKeyboardOpen ? 0 : width,
      useNativeDriver: false,
      duration: 150,
      delay: 100,
    }).start();
  }, [isKeyboardOpen, width, animation]);

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => <RightIconButton name="send" onPress={onSubmit} />,
    });
  }, [navigation, onSubmit]);

  return (
    <KeyboardAvoidingView
      behavior={Platform.select({ ios: 'height' })}
      style={styles.block}
      keyboardVerticalOffset={Platform.select({ ios: 180 })}
    >
      <View style={styles.block}>
        <Animated.Image
          source={{ uri: res.assets[0]?.uri }}
          style={[styles.image, { height: animation }]}
          resizeMode="cover"
        />
        <TextInput
          style={styles.input}
          multiline
          placeholder="이 사진에 대한 설명을 입력해 주세요..."
          textAlignVertical="top"
          value={description}
          onChangeText={setDescription}
        />
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  block: {
    flex: 1,
  },
  image: {
    width: '100%',
  },
  input: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 16,
    fontSize: 16,
  },
});

export default PostCreatingScreen;
