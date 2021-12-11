import React, { useEffect } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

import events from '../../../lib/events';
import PostCard from '../../../components/PostCard';

function PostScreen() {
  const navigation = useNavigation();
  const route = useRoute();
  const { post } = route.params;

  useEffect(() => {
    const handler = ({ description }) => {
      navigation.setParams({
        post: {
          ...post,
          description,
        },
      });
    };
    events.addListener('updatePost', handler);

    return () => {
      events.removeListener('updatePost', handler);
    };
  }, [post, navigation]);

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
