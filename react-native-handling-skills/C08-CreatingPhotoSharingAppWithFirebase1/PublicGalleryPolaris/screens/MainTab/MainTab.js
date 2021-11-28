import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { useMemberContext } from '../../contexts/MemberContext';

function MainTab() {
  const { member } = useMemberContext();

  return (
    <View style={styles.block}>
      {member.photoURL && (
        <Image
          source={{ uri: member.photoURL }}
          style={{ width: 128, height: 128, marginBottom: 16 }}
          resizeMode="cover"
        />
      )}
      <Text style={styles.text}>안녕하세요, {member.displayName}님!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  block: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
  },
});

export default MainTab;
