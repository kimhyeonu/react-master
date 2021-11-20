import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

function TodoItem({ id, text, done }) {
  return (
    <View style={styles.item}>
      <View style={[styles.circle, done && styles.filled]}>
        {done && (
          <Image
            source={require('../assets/icons/check-white/check-white.png')}
          />
        )}
      </View>
      <Text style={[styles.text, done && styles.lineThrough]}>{text}</Text>
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
});

export default TodoItem;
