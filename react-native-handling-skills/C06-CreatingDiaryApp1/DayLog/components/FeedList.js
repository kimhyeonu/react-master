import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';

import FeedListItem from './FeedListItem';

function FeedList({ logs, onScrolledToBottom }) {
  const onScroll = (e) => {
    if (!onScrolledToBottom) {
      return;
    }

    const { contentSize, layoutMeasurement, contentOffset } = e.nativeEvent;
    //* contentSize.height : FlatList 내부의 전체 크기
    //* layoutMeasurement.height : 화면에 나타난 FlatList의 실제 크기(화면 상단과 하단 영역을 제외한 크기)
    //* contentOffset.y : 스크롤할 때마다 늘어나는 값
    const distanceFromBottom =
      contentSize.height - layoutMeasurement.height - contentOffset.y;

    if (
      contentSize.height > layoutMeasurement.height &&
      distanceFromBottom < 48
    ) {
      onScrolledToBottom(true);
    } else {
      onScrolledToBottom(false);
    }
  };

  return (
    <FlatList
      data={logs}
      style={styles.block}
      renderItem={({ item }) => <FeedListItem log={item} />}
      keyExtractor={(log) => log.id}
      ItemSeparatorComponent={() => <View style={styles.separator} />}
      onScroll={onScroll}
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
