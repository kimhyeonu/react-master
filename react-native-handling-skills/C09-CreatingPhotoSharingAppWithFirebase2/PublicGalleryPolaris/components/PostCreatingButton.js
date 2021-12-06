import React, { useState } from 'react';
import {
  View,
  Pressable,
  StyleSheet,
  Platform,
  ActionSheetIOS,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { launchImageLibrary, launchCamera } from 'react-native-image-picker';

import PictureUploadingModal from './PictureUploadingModal';

const imagePickerOptions = {
  mediaType: 'photo',
  maxWidth: 768,
  maxHeight: 768,
  includeBase64: Platform.OS === 'android',
};

const TAB_BAR_HEIGHT = 49;

function PostCreatingButton() {
  const navigation = useNavigation();

  const insets = useSafeAreaInsets();

  const bottom = Platform.select({
    ios: TAB_BAR_HEIGHT / 2 + insets.bottom - 4,
    android: TAB_BAR_HEIGHT / 2,
  });

  const [modalVisible, setModalVisible] = useState(false);

  const onPickImage = (res) => {
    if (res.didCancel || !res) {
      return;
    }

    navigation.push('PostCreating', { res });
  };

  const onLaunchCamera = () => {
    launchCamera(imagePickerOptions, onPickImage);
  };

  const onLaunchImageLibrary = () => {
    launchImageLibrary(imagePickerOptions, onPickImage);
  };

  const onPress = () => {
    if (Platform.OS === 'android') {
      setModalVisible(true);
      return;
    }

    ActionSheetIOS.showActionSheetWithOptions(
      {
        options: ['카메라로 촬영하기', '사진 선택하기', '취소'],
        cancelButtonIndex: 2,
      },
      (buttonIndex) => {
        if (buttonIndex === 0) {
          onLaunchCamera();
        } else if (buttonIndex === 1) {
          onLaunchImageLibrary();
        }
      }
    );
  };

  return (
    <>
      <View style={[styles.wrapper, { bottom }]}>
        <Pressable
          style={({ pressed }) => [
            styles.circle,
            Platform.OS === 'ios' && pressed && { opacity: 0.5 },
          ]}
          android_ripple={{ color: '#ffffff' }}
          onPress={onPress}
        >
          <Icon name="camera-alt" color="white" size={24} />
        </Pressable>
      </View>

      <PictureUploadingModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        onLaunchCamera={onLaunchCamera}
        onLaunchImageLibrary={onLaunchImageLibrary}
      />
    </>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    position: 'absolute',
    width: 54,
    height: 54,
    zIndex: 5,
    borderRadius: 27,
    left: '50%',
    transform: [{ translateX: -27 }],
    ...Platform.select({
      ios: {
        shadowColor: '#4d4d4d',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
      },
      android: {
        elevation: 5,
        overflow: 'hidden',
      },
    }),
  },
  circle: {
    width: 54,
    height: 54,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#6200ee',
    borderRadius: 27,
  },
});

export default PostCreatingButton;
