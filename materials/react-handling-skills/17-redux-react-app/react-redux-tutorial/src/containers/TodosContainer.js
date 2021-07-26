import React from 'react';
import { useSelector } from 'react-redux';

import Todos from '../components/Todos';
import { changeInput, insert, toggle, remove } from '../modules/todos';
import useActions from '../libs/useActions';

const TodosContainer = () => {
  const { inputText, todos } = useSelector(({ todos }) => ({
    inputText: todos.inputText,
    todos: todos.todos,
  }));

  const [onChangeInput, onInsert, onToggle, onRemove] = useActions(
    [changeInput, insert, toggle, remove],
    []
  );

  return (
    <Todos
      inputText={inputText}
      todos={todos}
      onChangeInput={onChangeInput}
      onInsert={onInsert}
      onToggle={onToggle}
      onRemove={onRemove}
    />
  );
};

export default React.memo(TodosContainer);
