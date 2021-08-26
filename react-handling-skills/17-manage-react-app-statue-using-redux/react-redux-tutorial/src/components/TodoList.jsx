import React from 'react';

import TodoItem from './TodoItem.jsx';

const TodoList = ({
  inputText,
  items,
  onChangeInput,
  onAdd,
  onToggle,
  onRemove,
}) => {
  const onChange = (e) => onChangeInput(e.target.value);

  const onSubmit = (e) => {
    e.preventDefault();
    onAdd(inputText);
    onChangeInput('');
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input value={inputText} onChange={onChange} />
        <button type="submit">추가</button>
      </form>

      <div>
        {items.map((item) => (
          <TodoItem
            item={item}
            key={item.id}
            onToggle={onToggle}
            onRemove={onRemove}
          />
        ))}
      </div>
    </div>
  );
};

export default TodoList;
