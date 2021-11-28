import React from 'react';
import { View, Pressable, Text, StyleSheet, Platform } from 'react-native';

function CustomButton({ title, hasMarginBottom, theme, onPress }) {
  const isPrimary = theme === 'primary';

  return (
    <View style={[styles.block, hasMarginBottom && styles.margin]}>
      <Pressable
        onPress={onPress}
        style={({ pressed }) => [
          styles.button,
          isPrimary && styles.primaryButton,
          Platform.OS === 'ios' && pressed && { opacity: 0.5 },
        ]}
        android_ripple={{ color: isPrimary ? '#ffffff' : '#6200ee' }}
      >
        <Text
          style={[
            styles.text,
            isPrimary ? styles.primaryText : styles.secondaryText,
          ]}
        >
          {title}
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  block: {
    borderRadius: 4,
    overflow: 'hidden',
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 48,
    borderRadius: 4,
  },
  primaryButton: {
    backgroundColor: '#6200ee',
  },
  margin: {
    marginBottom: 8,
  },
  text: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'white',
  },
  primaryText: {
    color: 'white',
  },
  secondaryText: {
    color: '#6200ee',
  },
});

CustomButton.defaultProps = {
  theme: 'primary',
};

export default CustomButton;
