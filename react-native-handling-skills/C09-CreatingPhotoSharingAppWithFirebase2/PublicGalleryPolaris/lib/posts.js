import firestore from '@react-native-firebase/firestore';

const postsCollection = firestore().collection('posts');

export function createPost({ author, imageUrl, description }) {
  return postsCollection.add({
    author,
    imageUrl,
    description,
    createdAt: firestore.FieldValue.serverTimestamp(),
  });
}
