import firestore from '@react-native-firebase/firestore';

const postsCollection = firestore().collection('posts');

export function createPost({ author, postImageUrl, description }) {
  return postsCollection.add({
    author,
    postImageUrl,
    description,
    createdAt: firestore.FieldValue.serverTimestamp(),
  });
}
