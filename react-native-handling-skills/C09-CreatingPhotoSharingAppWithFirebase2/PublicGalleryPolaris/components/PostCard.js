import React, { useMemo } from 'react';
import { View, Text, Image, Pressable, StyleSheet } from 'react-native';
import { useNavigation, useNavigationState } from '@react-navigation/native';

import Avatar from './Avatar';

function PostCard({ author, postImageUrl, description, createdAt, id }) {
  const navigation = useNavigation();
  const routeNames = useNavigationState((state) => state.routeNames);

  const date = useMemo(
    () => (createdAt ? new Date(createdAt._seconds * 1000) : new Date()),
    [createdAt]
  );

  const onOpenProfile = () => {
    if (routeNames.find((routeName) => routeName === 'MyProfile')) {
      navigation.navigate('MyProfile');
    } else {
      navigation.navigate('Profile', {
        memberId: author.id,
        nickname: author.nickname,
      });
    }
  };

  return (
    <View style={styles.block}>
      <View style={[styles.header, styles.paddingBlock]}>
        <Pressable style={styles.profile} onPress={onOpenProfile}>
          <Avatar
            source={author.profileImageUrl && { uri: author.profileImageUrl }}
          />
          <Text style={styles.nickname}>{author.nickname}</Text>
        </Pressable>
      </View>

      <Image
        source={{ uri: postImageUrl }}
        resizeMethod="resize"
        resizeMode="cover"
        style={styles.postImage}
      />

      <View style={styles.paddingBlock}>
        <Text style={styles.description}>{description}</Text>
        <Text date={date} style={styles.date}>
          {date.toLocaleString()}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  block: {
    paddingTop: 16,
    paddingBottom: 16,
  },
  paddingBlock: {
    paddingHorizontal: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    marginBottom: 16,
  },
  profile: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  nickname: {
    marginLeft: 8,
    lineHeight: 16,
    fontSize: 16,
    fontWeight: 'bold',
  },
  postImage: {
    width: '100%',
    marginBottom: 16,
    aspectRatio: 1,
    backgroundColor: '#bdbdbd',
  },
  description: {
    marginBottom: 8,
    lineHeight: 24,
    fontSize: 16,
  },
  date: {
    lineHeight: 18,
    fontSize: 12,
    color: '#757575',
  },
});

export default PostCard;
