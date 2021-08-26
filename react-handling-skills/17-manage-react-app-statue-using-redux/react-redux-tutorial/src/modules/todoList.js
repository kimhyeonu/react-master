import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';

// 상수
let lastItemId = 0;

// 액션 타입
const CHANGE_INPUT = 'todoList/CHANGE_INPUT';
const ADD = 'todoList/ADD';
const TOGGLE = 'todoList/TOGGLE';
const REMOVE = 'todoList/REMOVE';

// 액션 생성 함수
// [1]
// export const changeInput = (inputText) => ({
//   type: CHANGE_INPUT,
//   inputText,
// });
// export const add = (inputText) => ({
//   type: ADD,
//   item: {
//     id: lastItemId + 1,
//     content: inputText,
//     done: false,
//   },
// });
// export const toggle = (id) => ({
//   type: TOGGLE,
//   id,
// });
// export const remove = (id) => ({
//   type: REMOVE,
//   id,
// });
// [2]
export const changeInput = createAction(CHANGE_INPUT, (inputText) => inputText);
export const add = createAction(ADD, (inputText) => ({
  id: lastItemId + 1,
  content: inputText,
  done: false,
}));
export const toggle = createAction(TOGGLE, (id) => id);
export const remove = createAction(REMOVE, (id) => id);

// 초기 상태
const initialState = {
  inputText: '',
  items: [],
};

// 리듀서
// 불변성 유지!
// [1]
// function todoList(state = initialState, action) {
//   switch (action.type) {
//     case CHANGE_INPUT:
//       return {
//         ...state,
//         inputText: action.inputText,
//       };

//     case ADD:
//       lastItemId++;

//       return {
//         ...state,
//         items: state.items.concat(action.item),
//       };

//     case TOGGLE:
//       return {
//         ...state,
//         items: state.items.map((item) =>
//           item.id === action.id ? { ...item, done: !item.done } : item
//         ),
//       };

//     case REMOVE:
//       return {
//         ...state,
//         items: state.items.filter((item) => item.id !== action.id),
//       };

//     default:
//       return state;
//   }
// }
// [2]
// const todoList = handleActions(
//   {
//     [CHANGE_INPUT]: (state, { payload: inputText }) => ({
//       ...state,
//       inputText,
//     }),
//     [ADD]: (state, { payload: item }) => {
//       lastItemId++;
//       return {
//         ...state,
//         items: state.items.concat(item),
//       };
//     },
//     [TOGGLE]: (state, { payload: id }) => ({
//       ...state,
//       items: state.items.map((item) =>
//         item.id === id ? { ...item, done: !item.done } : item
//       ),
//     }),
//     [REMOVE]: (state, { payload: id }) => {
//       return {
//         ...state,
//         items: state.items.filter((item) => item.id !== id),
//       };
//     },
//   },
//   initialState
// );
// [3]
const todoList = handleActions(
  {
    [CHANGE_INPUT]: (state, { payload: inputText }) =>
      produce(state, (draft) => {
        draft.inputText = inputText;
      }),
    [ADD]: (state, { payload: item }) => {
      lastItemId++;
      return produce(state, (draft) => {
        draft.items.push(item);
      });
    },
    [TOGGLE]: (state, { payload: id }) =>
      produce(state, (draft) => {
        const theItem = draft.items.find((item) => item.id === id);
        theItem.done = !theItem.done;
      }),
    [REMOVE]: (state, { payload: id }) =>
      produce(state, (draft) => {
        const theIndex = draft.items.findIndex((item) => item.id === id);
        draft.items.splice(theIndex, 1);
      }),
  },
  initialState
);

export default todoList;
