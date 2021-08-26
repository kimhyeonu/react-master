// 상수
let lastItemId = 0;

// 액션 타입
const CHANGE_INPUT = 'todoList/CHANGE_INPUT';
const ADD = 'todoList/ADD';
const TOGGLE = 'todoList/TOGGLE';
const REMOVE = 'todoList/REMOVE';

// 액션 생성 함수
export const changeInput = (inputText) => ({
  type: CHANGE_INPUT,
  inputText,
});
export const add = (inputText) => ({
  type: ADD,
  item: {
    id: lastItemId + 1,
    content: inputText,
    done: false,
  },
});
export const toggle = (id) => ({
  type: TOGGLE,
  id,
});
export const remove = (id) => ({
  type: REMOVE,
  id,
});

// 초기 상태
const initialState = {
  inputText: '',
  items: [],
};

// 리듀서
// 불변성 유지!
function todoList(state = initialState, action) {
  switch (action.type) {
    case CHANGE_INPUT:
      return {
        ...state,
        inputText: action.inputText,
      };

    case ADD:
      lastItemId++;
      return {
        ...state,
        items: state.items.concat(action.item),
      };

    case TOGGLE:
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === action.id ? { ...item, done: !item.done } : item
        ),
      };

    case REMOVE:
      lastItemId--;
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.id),
      };

    default:
      return state;
  }
}

export default todoList;
