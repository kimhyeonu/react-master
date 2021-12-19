import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Todo {
  id: number;
  title: string;
  done: boolean;
}

const initialState: Todo[] = [
  { id: 1, title: '리액트 네이티브 배우기', done: true },
  { id: 2, title: '상태 관리 배우기', done: false },
];

let nextId = 3;

const todoSlice = createSlice({
  name: 'todos',
  initialState: initialState,
  reducers: {
    add: {
      prepare(title: string) {
        const preparedItem = {
          payload: { id: nextId, title },
        };
        return preparedItem;
      },
      reducer(state, action: PayloadAction<{ id: number; title: string }>) {
        state.push({
          ...action.payload,
          done: false,
        });
      },
    },
    remove(state, action: PayloadAction<number>) {
      const selectedItemIndex = state.findIndex(
        (item) => item.id === action.payload
      );
      state.splice(selectedItemIndex);
    },
    toggle(state, action: PayloadAction<number>) {
      const selectedItem = state.find((item) => item.id === action.payload);
      if (!selectedItem) {
        return;
      }
      selectedItem.done = !selectedItem.done;
    },
  },
});

export const { add, remove, toggle } = todoSlice.actions;
export default todoSlice.reducer;
