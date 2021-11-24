import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';

import FeedListItem from './FeedListItem';

function FeedList({ logs }) {
  return (
    <FlatList
      data={logs}
      style={styles.block}
      renderItem={({ item }) => <FeedListItem log={item} />}
      keyExtractor={(log) => log.id}
      ItemSeparatorComponent={() => <View style={styles.separator} />}
    />
  );
}

const styles = StyleSheet.create({
  block: {
    flex: 1,
  },
  separator: {
    width: '100%',
    height: 1,
    backgroundColor: '#e0e0e0',
  },
});

export default FeedList;
