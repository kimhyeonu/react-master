import React from 'react';
// import { createStore } from 'redux';
// import { Provider } from 'react-redux';
// import { configureStore } from '@reduxjs/toolkit';
import { RecoilRoot } from 'recoil';

// import rootReducer from './slices';
// import AuthApp from './components/AuthApp';
// import TodoApp from './components/TodoApp';
import PostsApp from './components/PostsApp';

// const store = createStore(rootReducer);
// const store = configureStore({ reducer: rootReducer });

function App() {
  return (
    // <Provider store={store}>
    //   <AuthApp />
    //   <TodoApp />
    //   <PostsApp />
    // </Provider>
    <RecoilRoot>
      {/* <AuthApp /> */}
      {/* <TodoApp /> */}
      <PostsApp />
    </RecoilRoot>
  );
}

export default App;
