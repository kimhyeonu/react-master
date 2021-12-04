import firestore from '@react-native-firebase/firestore';

export const membersCollection = firestore().collection('members');

export function createMember({ id, displayName, photoURL }) {
  return membersCollection.doc(id).set({
    id,
    displayName,
    photoURL,
  });
}

export async function readMember(id) {
  const document = await membersCollection.doc(id).get();
  return document.data();
}
