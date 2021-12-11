import firestore from '@react-native-firebase/firestore';

const postsCollection = firestore().collection('posts');

export const PAGE_PER_POST = 12;

export function createPost({ author, postImageUrl, description }) {
  return postsCollection.add({
    author,
    postImageUrl,
    description,
    createdAt: firestore.FieldValue.serverTimestamp(),
  });
}

export async function readPosts({ id, authorId, mode } = {}) {
  let query = postsCollection.orderBy('createdAt', 'desc').limit(PAGE_PER_POST);

  if (authorId) {
    query = query.where('author.id', '==', authorId);
  }

  if (id) {
    const cursorDoc = await postsCollection.doc(id).get();
    query =
      mode === 'older'
        ? query.startAfter(cursorDoc)
        : query.endBefore(cursorDoc);
  }

  const snapshot = await query.get();

  const posts = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  return posts;
}

export async function readOlderPosts(id, authorId) {
  return readPosts({
    id,
    authorId,
    mode: 'older',
  });
}

export async function readNewerPosts(id, authorId) {
  return readPosts({
    id,
    authorId,
    mode: 'newer',
  });
}
