import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface User {
  id: number;
  name: string;
  nickname: string;
}

interface AuthState {
  user: User | null;
}

const initialState: AuthState = {
  user: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    signin(state, action: PayloadAction<User>) {
      state.user = action.payload;
    },
    signout(state) {
      state.user = null;
    },
  },
});

export const { signin, signout } = authSlice.actions;
export default authSlice.reducer;
