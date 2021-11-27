import React, { useState } from 'react';
import { View, StyleSheet, Pressable, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { format } from 'date-fns';
import { ko } from 'date-fns/locale';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

import TransparentCircleButton from './TransparentCircleButton';

function WritingScreenHeader({
  onSave,
  onAskRemove,
  editable,
  date,
  onChangeDate,
}) {
  const navigation = useNavigation();

  const [mode, setMode] = useState('date');
  const [modalVisible, setModalVisible] = useState(false);

  const onPressDate = () => {
    setMode('date');
    setModalVisible(true);
  };

  const onPressTime = () => {
    setMode('time');
    setModalVisible(true);
  };

  const onConfirm = (selectedDate) => {
    setModalVisible(false);
    onChangeDate(selectedDate);
  };

  const onCancel = () => {
    setModalVisible(false);
  };

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

      <View style={styles.center}>
        <Pressable onPress={onPressDate}>
          <Text>{format(new Date(date), 'PPP', { locale: ko })}</Text>
        </Pressable>

        <View style={styles.separator} />

        <Pressable onPress={onPressTime}>
          <Text>{format(new Date(date), 'p', { locale: ko })}</Text>
        </Pressable>
      </View>

      <DateTimePickerModal
        isVisible={modalVisible}
        mode={mode}
        date={date}
        onConfirm={onConfirm}
        onCancel={onCancel}
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
  center: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: -1,
  },
  separator: {
    width: 8,
  },
  buttons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default WritingScreenHeader;
