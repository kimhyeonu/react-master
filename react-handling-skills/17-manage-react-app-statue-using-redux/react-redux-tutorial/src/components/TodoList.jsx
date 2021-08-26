import React from 'react';

import TodoItem from './TodoItem.jsx';

const TodoList = ({
  inputText,
  items,
  onChange,
  onAdd,
  onToggle,
  onRemove,
}) => {
  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input />
        <button type="submit">추가</button>
      </form>

      <div>
        <TodoItem />
        <TodoItem />
        <TodoItem />
        <TodoItem />
        <TodoItem />
      </div>
    </div>
  );
};

export default TodoList;
