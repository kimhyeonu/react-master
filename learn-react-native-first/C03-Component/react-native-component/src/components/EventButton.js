import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

const EventButton = () => {
  const _onPressIn = () => console.log('Press In!\n');
  const _onPressOut = () => console.log('Press Out!\n');
  const _onPress = () => console.log('Press!\n');
  const _onLongPress = () => console.log('Log Press!\n');

  return (
    <TouchableOpacity
      style={{
        backgroundColor: '#f1c40f',
        margin: 10,
        padding: 16,
        borderRadius: 8,
      }}
      onPressIn={_onPressIn}
      onPressOut={_onPressOut}
      onPress={_onPress}
      onLongPress={_onLongPress}
      delayLongPress={3000}
    >
      <Text style={{ color: 'white', fontSize: 24 }}>Press</Text>
    </TouchableOpacity>
  );
};

export default EventButton;
