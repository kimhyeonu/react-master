import React, { useReducer } from 'react';
import { View, StyleSheet, Pressable, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { format } from 'date-fns';
import { ko } from 'date-fns/locale';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

import TransparentCircleButton from './TransparentCircleButton';

const initialState = {
  mode: 'date',
  modalVisible: false,
};

function reducer(state, action) {
  switch (action.type) {
    case 'openModal':
      return {
        mode: action.mode,
        modalVisible: true,
      };

    case 'closeModal':
      return {
        ...state,
        modalVisible: false,
      };

    default:
      throw new Error('Unhandled action type');
  }
}

function WritingScreenHeader({
  onSave,
  onAskRemove,
  editable,
  date,
  onChangeDate,
}) {
  const navigation = useNavigation();

  const onGoBack = () => {
    navigation.pop();
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const openModal = (mode) => dispatch({ type: 'openModal', mode });
  const closeModal = () => dispatch({ type: 'closeModal' });

  const onConfirm = (selectedDate) => {
    closeModal();
    onChangeDate(selectedDate);
  };

  const onCancel = () => {
    closeModal();
  };

  return (
    <View style={styles.block}>
      <TransparentCircleButton
        name="arrow-back"
        color="#424242"
        onPress={onGoBack}
      />

      <View style={styles.center}>
        <Pressable onPress={() => openModal('date')}>
          <Text>{format(new Date(date), 'PPP', { locale: ko })}</Text>
        </Pressable>

        <View style={styles.separator} />

        <Pressable onPress={() => openModal('time')}>
          <Text>{format(new Date(date), 'p', { locale: ko })}</Text>
        </Pressable>
      </View>

      <DateTimePickerModal
        isVisible={state.modalVisible}
        mode={state.mode}
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
