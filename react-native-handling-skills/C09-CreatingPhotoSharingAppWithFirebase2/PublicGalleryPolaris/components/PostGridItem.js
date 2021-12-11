import React from 'react';
import {
  Pressable,
  Image,
  StyleSheet,
  useWindowDimensions,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

function PostGridItem({ post }) {
  const dimensions = useWindowDimensions();
  const size = (dimensions.width - 3) / 3;

  const navigation = useNavigation();

  const onPress = () => {
    navigation.navigate('Post', { post });
  };

  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        {
          opacity: pressed ? 0.6 : 1,
          width: size,
          height: size,
        },
        styles.block,
      ]}
    >
      <Image
        style={styles.postImage}
        source={{ uri: post.postImageUrl }}
        resizeMethod="resize"
        resizeMode="cover"
      />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  block: {
    margin: 0.5,
  },
  postImage: {
    backgroundColor: '#bdbdbd',
    width: '100%',
    height: '100%',
  },
});

export default PostGridItem;
