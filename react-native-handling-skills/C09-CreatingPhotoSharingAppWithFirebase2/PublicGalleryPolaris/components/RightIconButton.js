import React from 'react';
import { View, Pressable, Platform, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

function RightIconButton({ name, color, onPress }) {
  return (
    <View style={styles.block}>
      <Pressable
        style={({ pressed }) => [
          styles.circle,
          Platform.OS === 'ios' && pressed && { opacity: 0.3 },
        ]}
        android_ripple={{ color: '#eee' }}
        onPress={onPress}
      >
        <Icon name={name} color={color} size={24} />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  block: {
    marginRight: -8,
    borderRadius: 24,
    overflow: 'hidden',
  },
  circle: {
    width: 48,
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

RightIconButton.defaultProps = {
  color: '#6200ee',
};

export default RightIconButton;
