import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { useRoute } from '@react-navigation/native';

import PostCard from '../../../components/PostCard';

function PostScreen() {
  const route = useRoute();
  const { post } = route.params;

  return (
    <ScrollView contentContainerStyle={styles.contentContainer}>
      <PostCard
        author={post.author}
        postImageUrl={post.postImageUrl}
        description={post.description}
        createdAt={post.createdAt}
        id={post.id}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    paddingBottom: 40,
  },
});

export default PostScreen;
