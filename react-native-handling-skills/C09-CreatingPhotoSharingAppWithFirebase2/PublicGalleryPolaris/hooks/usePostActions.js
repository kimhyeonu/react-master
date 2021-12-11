import React, { useState } from 'react';
import { ActionSheetIOS, Platform } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

import { deletePost } from '../lib/posts';

export default function usePostActions({ id, description }) {
  const navigation = useNavigation();
  const route = useRoute();

  const [selecting, setSelecting] = useState(false);

  const onEdit = () => {
    navigation.navigate('PostEditing', {
      id,
      description,
    });
  };

  const onDelete = async () => {
    await deletePost(id);

    if (route.name === 'Post') {
      navigation.pop();
    }
  };

  const onPressMore = () => {
    if (Platform.OS === 'android') {
      setSelecting(true);
    } else {
      ActionSheetIOS.showActionSheetWithOptions(
        {
          options: ['설명 수정', '포스트 삭제', '취소'],
          destructiveButtonIndex: 1,
          cancelButtonIndex: 2,
        },
        (buttonIndex) => {
          if (buttonIndex === 0) {
            onEdit();
          } else if (buttonIndex === 1) {
            onDelete();
          }
        }
      );
    }
  };

  const actions = [
    {
      icon: 'edit',
      text: '설명 수정',
      onPress: onEdit,
    },
    {
      icon: 'delete',
      text: '포스트 삭제',
      onPress: onDelete,
    },
  ];

  const onClose = () => {
    setSelecting(false);
  };

  return {
    selecting,
    onPressMore,
    actions,
    onClose,
  };
}
