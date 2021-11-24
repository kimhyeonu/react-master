import React, { useContext, useState } from 'react';
import { View, StyleSheet } from 'react-native';

import LogContext from '../contexts/LogContext';
import FloatingWritingScreen from '../components/FloatingWritingButton';
import FeedList from '../components/FeedList';

function FeedsScreen() {
  const { logs } = useContext(LogContext);

  const [hidden, setHidden] = useState(false);

  const onScrolledToBottom = (isBottom) => {
    if (hidden !== isBottom) {
      setHidden(isBottom);
    }
  };

  return (
    <View style={styles.block}>
      <FeedList logs={logs} onScrolledToBottom={onScrolledToBottom} />

      <FloatingWritingScreen hidden={hidden} />
    </View>
  );
}

const styles = StyleSheet.create({
  block: {
    flex: 1,
  },
});

export default FeedsScreen;
