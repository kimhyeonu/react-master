import { combineReducers } from 'redux';

import counter from './couter';
import todoList from './todoList';

// 루트 리듀서 합성
const rootReducer = combineReducers({
  counter,
  todoList,
});

export default rootReducer;
