import { useEffect, useState } from 'react';
import {
  PAGE_PER_POST,
  readPosts,
  readOlderPosts,
  readNewerPosts,
} from '../lib/posts';

export default function usePosts(authorId) {
  const [posts, setPosts] = useState(null);
  const [showNoMorePost, setShowNoMorePost] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  const onLoadMorePosts = async () => {
    if (showNoMorePost || !posts || posts.length < PAGE_PER_POST) {
      return;
    }

    const lastPost = posts[posts.length - 1];
    const olderPosts = await readOlderPosts(lastPost.id, authorId);
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
    const newerPosts = await readNewerPosts(firstPost.id, authorId);
    setRefreshing(false);

    if (newerPosts.length === 0) {
      return;
    }

    setPosts(newerPosts.concat(posts));
  };

  useEffect(() => {
    readPosts({ authorId }).then((_posts) => {
      setPosts(_posts);
      if (_posts.length < PAGE_PER_POST) {
        setShowNoMorePost(true);
      }
    });
  }, [authorId]);

  return {
    posts,
    showNoMorePost,
    refreshing,
    onLoadMorePosts,
    onRefresh,
  };
}
