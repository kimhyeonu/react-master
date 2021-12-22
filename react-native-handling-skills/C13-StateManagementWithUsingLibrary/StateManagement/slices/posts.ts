import {
  createAsyncThunk,
  createSlice,
  PayloadAction,
  SerializedError,
} from '@reduxjs/toolkit';

import { Post } from '../api/type';
import { getPosts } from '../api/getPosts';

export const fetchPosts = createAsyncThunk('posts/fetchPosts', getPosts);

interface PostsState {
  posts: {
    loading: boolean;
    data: Post[] | null;
    error: SerializedError | null;
  };
}

const initialState: PostsState = {
  posts: {
    loading: false,
    data: null,
    error: null,
  },
};

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchPosts.pending.type]: (state) => {
      state.posts = {
        loading: true,
        data: null,
        error: null,
      };
    },
    [fetchPosts.fulfilled.type]: (state, action: PayloadAction<Post[]>) => {
      state.posts.loading = false;
      state.posts.data = action.payload;
    },
    [fetchPosts.rejected.type]: (
      state,
      action: ReturnType<typeof fetchPosts.rejected>
    ) => {
      state.posts.loading = false;
      state.posts.error = action.error;
    },
  },
});

export default postsSlice.reducer;
