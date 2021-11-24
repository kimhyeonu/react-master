import React, { useRef, useEffect } from 'react';
import { Platform, Pressable, View, StyleSheet, Animated } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Icon from 'react-native-vector-icons/MaterialIcons';

function FloatingWritingScreen({ hidden }) {
  const navigation = useNavigation();

  const onPress = () => {
    navigation.navigate('Writing');
  };

  const animation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Animated.timing(animation, {
    //   toValue: hidden ? 1 : 0,
    //   useNativeDriver: true,
    // }).start();

    Animated.spring(animation, {
      toValue: hidden ? 1 : 0,
      useNativeDriver: true,
      tension: 45,
      friction: 5,
    }).start();
  }, [animation, hidden]);

  return (
    <Animated.View
      style={[
        styles.wrapper,
        {
          transform: [
            {
              translateY: animation.interpolate({
                inputRange: [0, 1],
                outputRange: [0, 88],
              }),
            },
          ],
          opacity: animation.interpolate({
            inputRange: [0, 1],
            outputRange: [1, 0],
          }),
        },
      ]}
    >
      <Pressable
        style={({ pressed }) => [
          styles.button,
          Platform.OS === 'ios' && {
            opacity: pressed ? 0.6 : 1,
          },
        ]}
        android_ripple={{ color: 'white' }}
        onPress={onPress}
      >
        <Icon name="add" size={24} style={styles.icon} />
      </Pressable>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    position: 'absolute',
    bottom: 16,
    right: 16,
    width: 56,
    height: 56,
    borderRadius: 28,

    shadowColor: '#4d4d4d',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,

    elevation: 5,
    overflow: Platform.select({ android: 'hidden' }),
  },
  button: {
    width: 56,
    height: 56,
    borderRadius: 28,

    justifyContent: 'center',
    alignItems: 'center',

    backgroundColor: '#009688',
  },
  icon: {
    color: 'white',
  },
});

export default FloatingWritingScreen;
