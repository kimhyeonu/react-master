import { combineReducers } from 'redux';

import auth from './auth';
import todos from './todos';
import posts from './posts';

const rootReducer = combineReducers({
  auth,
  todos,
  posts,
});

// rootReducer 함수의 반환값 타입을 RootState type alias로 지정한다.
export type RootState = ReturnType<typeof rootReducer>;

declare module 'react-redux' {
  interface DefaultRootState extends RootState {}
}

export default rootReducer;
