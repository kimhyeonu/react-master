import React from 'react';
import { connect } from 'react-redux';

import Todos from '../components/Todos';
import { changeInput, insert, toggle, remove } from '../modules/todos';

const TodosContainer = ({
  inputText,
  todos,
  changeInput,
  insert,
  toggle,
  remove,
}) => {
  return (
    <Todos
      inputText={inputText}
      todos={todos}
      onChangeInput={changeInput}
      onInsert={insert}
      onToggle={toggle}
      onRemove={remove}
    />
  );
};

export default connect(
  ({ todos }) => ({
    inputText: todos.inputText,
    todos: todos.todos,
  }),
  {
    changeInput,
    insert,
    toggle,
    remove,
  }
)(TodosContainer);
