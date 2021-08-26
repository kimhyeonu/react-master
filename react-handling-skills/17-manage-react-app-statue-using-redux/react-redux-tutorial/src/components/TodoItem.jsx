import React from 'react';

const TodoItem = ({ item, onToggle, onRemove }) => {
  return (
    <div>
      <input type="checkbox" />
      <span>예제 텍스트</span>
      <button>삭제</button>
    </div>
  );
};

export default TodoItem;
