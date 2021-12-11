import React, { useEffect, useState } from 'react';
import {
  View,
  FlatList,
  Text,
  RefreshControl,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';

import events from '../lib/events';
import { useMemberContext } from '../contexts/MemberContext';
import { readMember } from '../lib/members';
import Avatar from './Avatar';
import PostGridItem from './PostGridItem';
import usePosts from '../hooks/usePosts';

const renderItem = ({ item }) => <PostGridItem post={item} />;

function Profile({ memberId }) {
  const [member, setMember] = useState(null);
  const { posts, showNoMorePost, refreshing, onLoadMorePosts, onRefresh } =
    usePosts(memberId);

  useEffect(() => {
    readMember(memberId).then(setMember);
  }, [memberId]);

  if (!member || !posts) {
    return (
      <ActivityIndicator style={styles.spinner} size={32} color="#6200ee" />
    );
  }

  return (
    <FlatList
      style={styles.block}
      data={posts}
      renderItem={renderItem}
      numColumns={3}
      keyExtractor={(item) => item.id}
      ListHeaderComponent={
        <View style={styles.memberInfo}>
          <Avatar
            source={member.profileImageUrl && { uri: member.profileImageUrl }}
            size={128}
          />
          <Text style={styles.memberNickname}>{member.nickname}</Text>
        </View>
      }
      onEndReached={onLoadMorePosts}
      onEndReachedThreshold={0.25}
      ListFooterComponent={
        !showNoMorePost && (
          <ActivityIndicator
            style={styles.bottomSpinner}
            size={32}
            color="#6200ee"
          />
        )
      }
      refreshControl={
        <RefreshControl onRefresh={onRefresh} refreshing={refreshing} />
      }
    />
  );
}

const styles = StyleSheet.create({
  spinner: {
    flex: 1,
    justifyContent: 'center',
  },
  bottomSpinner: {
    height: 128,
  },
  block: {
    flex: 1,
  },
  memberInfo: {
    paddingTop: 80,
    paddingBottom: 64,
    alignItems: 'center',
  },
  memberNickname: {
    marginTop: 8,
    fontSize: 24,
    color: '#424242',
  },
});

export default Profile;
