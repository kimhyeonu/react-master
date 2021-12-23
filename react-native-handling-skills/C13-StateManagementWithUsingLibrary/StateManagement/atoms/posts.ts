import { atom } from 'recoil';
import { Post } from '../api/type';

interface PostsState {
  loading: boolean;
  data: Post[] | null;
  error: Error | null;
}

export const postsState = atom<PostsState>({
  key: 'postsState',
  default: {
    loading: false,
    data: null,
    error: null,
  },
});
