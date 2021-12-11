import React from 'react';
import { View, StyleSheet, Text, Pressable, Platform } from 'react-native';

import { signOut } from '../lib/auth';
import { useMemberContext } from '../contexts/MemberContext';

function SettingScreen() {
  const { setMember } = useMemberContext();

  const onSignOut = async () => {
    await signOut();
    setMember(null);
  };

  return (
    <View style={styles.block}>
      <Pressable
        onPress={onSignOut}
        style={({ pressed }) => [
          styles.item,
          pressed && Platform.select({ ios: { opacity: 0.5 } }),
        ]}
        android_ripple={{ color: '#eee' }}
      >
        <Text style={styles.itemText}>접속 해제</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  block: {
    flex: 1,
    paddingTop: 32,
  },
  item: {
    paddingHorizontal: 12,
    paddingVertical: 16,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#eeeeee',
    backgroundColor: 'white',
  },
  itemText: {
    fontSize: 16,
  },
});

export default SettingScreen;
