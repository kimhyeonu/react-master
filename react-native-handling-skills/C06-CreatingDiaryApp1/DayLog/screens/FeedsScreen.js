import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';

import LogContext from '../contexts/LogContext';
import FloatingWritingScreen from '../components/FloatingWritingButton';
import FeedList from '../components/FeedList';

function FeedsScreen() {
  const { logs } = useContext(LogContext);

  return (
    <View style={styles.block}>
      <FeedList logs={logs} />

      <FloatingWritingScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  block: {
    flex: 1,
  },
});

export default FeedsScreen;
