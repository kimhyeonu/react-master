import React from 'react';
import { Platform, View, Pressable, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

function TransparentCircleButton({ name, color, hasMarginRight, onPress }) {
  return (
    <View
      style={[styles.iconButtonWrapper, hasMarginRight && styles.marginRight]}
    >
      <Pressable
        style={({ pressed }) => [
          styles.iconButton,
          Platform.OS === 'ios' && pressed && { backgroundColor: '#efefef' },
        ]}
        onPress={onPress}
        android_ripple={{ color: '#ededed' }}
      >
        <Icon name={name} size={24} color={color} />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  iconButtonWrapper: {
    width: 32,
    height: 32,
    borderRadius: 16,
    overflow: 'hidden',
  },
  iconButton: {
    width: 32,
    height: 32,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  marginRight: {
    marginRight: 8,
  },
});

export default TransparentCircleButton;
