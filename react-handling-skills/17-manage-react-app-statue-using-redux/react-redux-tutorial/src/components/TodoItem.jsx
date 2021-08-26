import React from 'react';

const TodoItem = ({ item, onToggle, onRemove }) => {
  return (
    <div>
      <input
        type="checkbox"
        onClick={() => onToggle(item.id)}
        checked={item.done}
        readOnly={true}
      />

      <span style={{ textDecoration: item.done ? 'line-through' : 'none' }}>
        {item.content}
      </span>

      <button onClick={() => onRemove(item.id)}>제거</button>
    </div>
  );
};

export default TodoItem;
