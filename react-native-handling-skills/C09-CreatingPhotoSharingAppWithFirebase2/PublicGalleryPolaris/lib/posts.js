import firestore from '@react-native-firebase/firestore';

const postsCollection = firestore().collection('posts');

export const PAGE_PER_POST = 3;

export function createPost({ author, postImageUrl, description }) {
  return postsCollection.add({
    author,
    postImageUrl,
    description,
    createdAt: firestore.FieldValue.serverTimestamp(),
  });
}

export async function readPosts() {
  const snapshot = await postsCollection
    .orderBy('createdAt', 'desc')
    .limit(PAGE_PER_POST)
    .get();
  const posts = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  return posts;
}

export async function readOlderPosts(id) {
  const cursorDoc = await postsCollection.doc(id).get();
  const snapshot = await postsCollection
    .orderBy('createdAt', 'desc')
    .startAfter(cursorDoc)
    .limit(PAGE_PER_POST)
    .get();
  const posts = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  return posts;
}

export async function readNewerPosts(id) {
  const cursorDoc = await postsCollection.doc(id).get();
  const snapshot = await postsCollection
    .orderBy('createdAt', 'desc')
    .endBefore(cursorDoc)
    .limit(PAGE_PER_POST)
    .get();
  const posts = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  return posts;
}
