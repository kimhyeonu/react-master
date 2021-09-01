import React from 'react';
import { Route } from 'react-router-dom';

import PostListPage from './pages/PostListPage';
import PostDetailPage from './pages/PostDetailPage';
import PostEditorPage from './pages/PostEditorPage';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';

const App = () => {
  return (
    <>
      <Route component={PostListPage} path={['/@:username', '/']} exact />
      <Route component={PostDetailPage} path="/@:username/:postId" />
      <Route component={PostEditorPage} path="/editor" />
      <Route component={SignInPage} path="/sign-in" />
      <Route component={SignUpPage} path="/sign-up" />
    </>
  );
};

export default App;
