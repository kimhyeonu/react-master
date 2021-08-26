import React from 'react';

import Counter from './components/Counter.jsx';
import TodoList from './components/TodoList.jsx';

const App = () => {
  return (
    <div>
      <Counter number={0} />

      <hr />

      <TodoList />
    </div>
  );
};

export default App;
