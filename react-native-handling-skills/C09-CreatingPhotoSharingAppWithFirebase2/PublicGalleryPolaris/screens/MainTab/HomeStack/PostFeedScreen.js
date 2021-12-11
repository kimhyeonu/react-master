import React from 'react';
import {
  FlatList,
  RefreshControl,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';

import PostCard from '../../../components/PostCard';
import usePosts from '../../../hooks/usePosts';

function PostFeedScreen() {
  const { posts, showNoMorePost, refreshing, onLoadMorePosts, onRefresh } =
    usePosts();

  const renderItem = ({ item }) => (
    <PostCard
      author={item.author}
      postImageUrl={item.postImageUrl}
      description={item.description}
      createdAt={item.createdAt}
      id={item.id}
    />
  );

  return (
    <FlatList
      data={posts}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      contentContainerStyle={styles.container}
      onEndReached={onLoadMorePosts}
      onEndReachedThreshold={0.75}
      ListFooterComponent={
        !showNoMorePost && (
          <ActivityIndicator style={styles.spinner} size={32} color="#6200ee" />
        )
      }
      refreshControl={
        <RefreshControl onRefresh={onRefresh} refreshing={refreshing} />
      }
    />
  );
}

const styles = StyleSheet.create({
  container: {
    paddingBottom: 48,
  },
  spinner: {
    height: 64,
  },
});

export default PostFeedScreen;
