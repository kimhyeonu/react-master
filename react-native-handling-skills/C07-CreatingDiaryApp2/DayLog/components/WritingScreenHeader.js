import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import TransparentCircleButton from './TransparentCircleButton';

function WritingScreenHeader({ onSave, onAskRemove, editable }) {
  const navigation = useNavigation();

  const onGoBack = () => {
    navigation.pop();
  };

  return (
    <View style={styles.block}>
      <TransparentCircleButton
        name="arrow-back"
        color="#424242"
        onPress={onGoBack}
      />

      <View style={styles.buttons}>
        {editable && (
          <TransparentCircleButton
            name="delete-forever"
            color="#ef5350"
            hasMarginRight
            onPress={onAskRemove}
          />
        )}

        <TransparentCircleButton
          name="check"
          color="#009688"
          onPress={onSave}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  block: {
    height: 48,
    paddingHorizontal: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  buttons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default WritingScreenHeader;
