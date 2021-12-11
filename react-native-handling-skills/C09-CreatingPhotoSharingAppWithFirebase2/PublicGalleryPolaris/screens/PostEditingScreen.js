import React, { useState, useEffect, useCallback } from 'react';
import {
  TextInput,
  KeyboardAvoidingView,
  StyleSheet,
  Platform,
} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

import events from '../lib/events';
import RightIconButton from '../components/RightIconButton';
import { updatePost } from '../lib/posts';

function PostEditingScreen() {
  const navigation = useNavigation();
  const { params } = useRoute();

  const [description, setDescription] = useState(params.description);

  const onSubmit = useCallback(async () => {
    await updatePost({
      id: params.id,
      description,
    });

    events.emit('updatePost', {
      postId: params.id,
      description,
    });

    navigation.pop();
  }, [navigation, params.id, description]);

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => <RightIconButton name="check" onPress={onSubmit} />,
    });
  }, [navigation, onSubmit]);

  return (
    <KeyboardAvoidingView
      behavior={Platform.select({ ios: 'height' })}
      style={styles.block}
      keyboardVerticalOffset={Platform.select({ ios: 88 })}
    >
      <TextInput
        style={styles.input}
        multiline={true}
        placeholder="이 사진에 대한 설명을 입력해 주세요..."
        textAlignVertical="top"
        value={description}
        onChangeText={setDescription}
      />
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  block: {
    flex: 1,
  },
  input: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 16,
    fontSize: 16,
  },
});

export default PostEditingScreen;
