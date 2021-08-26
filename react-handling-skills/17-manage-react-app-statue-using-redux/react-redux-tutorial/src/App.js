import React from 'react';

import CounterContainer from './containers/CounterContainer.jsx';
import TodoListContainer from './containers/TodoListContainer.jsx';

const App = () => {
  return (
    <div>
      <CounterContainer />

      <hr />

      <TodoListContainer />
    </div>
  );
};

export default App;
