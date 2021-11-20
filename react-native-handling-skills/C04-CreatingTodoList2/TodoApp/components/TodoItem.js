import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

function TodoItem({ id, text, done, onToggle, onDelete }) {
  const _onDelete = () => {
    Alert.alert(
      // 제목
      '삭제',
      // 내용
      '정말로 삭제하시겠어요?',
      // 버튼 배열
      [
        { text: '취소', onPress: () => {}, style: 'cancel' },
        {
          text: '삭제',
          onPress: () => onDelete(id),
          style: 'destructive',
        },
      ],
      // 옵션 객체
      {
        cancelable: true,
        onDismiss: () => {},
      }
    );
  };

  return (
    <View style={styles.item}>
      <TouchableOpacity onPress={() => onToggle(id)}>
        <View style={[styles.circle, done && styles.filled]}>
          {done && (
            <Image
              source={require('../assets/icons/check-white/check-white.png')}
            />
          )}
        </View>
      </TouchableOpacity>

      <Text style={[styles.text, done && styles.lineThrough]}>{text}</Text>

      {done ? (
        <TouchableOpacity onPress={_onDelete}>
          <Icon name="delete" size={32} color="red" />
        </TouchableOpacity>
      ) : (
        <View style={styles.removePlaceholder} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomColor: '#e0e0e0',
  },
  circle: {
    marginRight: 16,
    width: 24,
    height: 24,
    borderWidth: 1,
    borderRadius: 12,
    borderColor: '#26a69a',
  },
  filled: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#26a69a',
  },
  text: {
    flex: 1,
    fontSize: 16,
    color: '#212121',
  },
  lineThrough: {
    color: '#9e9e9e',
    textDecorationLine: 'line-through',
  },
  removePlaceholder: {
    width: 32,
    height: 32,
  },
});

export default TodoItem;
