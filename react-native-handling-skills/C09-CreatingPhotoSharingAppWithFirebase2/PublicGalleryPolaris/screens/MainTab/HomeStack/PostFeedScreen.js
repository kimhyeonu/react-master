import React, { useEffect, useState } from 'react';
import {
  FlatList,
  RefreshControl,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';

import {
  PAGE_PER_POST,
  readPosts,
  readOlderPosts,
  readNewerPosts,
} from '../../../lib/posts';
import PostCard from '../../../components/PostCard';

function PostFeedScreen() {
  const [posts, setPosts] = useState(null);
  const [showNoMorePost, setShowNoMorePost] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  const onLoadMorePosts = async () => {
    if (showNoMorePost || !posts || posts.length < PAGE_PER_POST) {
      return;
    }

    const lastPost = posts[posts.length - 1];
    const olderPosts = await readOlderPosts(lastPost.id);
    if (olderPosts.length < PAGE_PER_POST) {
      setShowNoMorePost(true);
    }

    setPosts(posts.concat(olderPosts));
  };

  const onRefresh = async () => {
    if (!posts || posts.length === 0 || refreshing) {
      return;
    }

    const firstPost = posts[0];
    setRefreshing(true);
    const newerPosts = await readNewerPosts(firstPost.id);
    setRefreshing(false);

    if (newerPosts.length === 0) {
      return;
    }

    setPosts(newerPosts.concat(posts));
  };

  const renderItem = ({ item }) => (
    <PostCard
      author={item.author}
      postImageUrl={item.postImageUrl}
      description={item.description}
      createdAt={item.createdAt}
      id={item.id}
    />
  );

  useEffect(() => {
    readPosts().then(setPosts);
  }, []);

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
