import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

function EmptyList() {
  return (
    <View style={styles.block}>
      <Image
        source={require('../assets/images/empty-list.png')}
        style={styles.image}
      />
      <Text style={styles.description}>할 일이 없네요 😅</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  block: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 240,
    height: 179,
    marginBottom: 16,
  },
  description: {
    fontSize: 24,
    color: '#9e9e9e',
  },
});

export default EmptyList;
