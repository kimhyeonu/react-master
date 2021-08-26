import React from 'react';
import { connect } from 'react-redux';

import TodoList from '../components/TodoList';
import { changeInput, add, toggle, remove } from '../modules/todoList';

const TodoListContainer = ({
  inputText,
  items,
  changeInput,
  add,
  toggle,
  remove,
}) => {
  return (
    <TodoList
      inputText={inputText}
      items={items}
      onChangeInput={changeInput}
      onAdd={add}
      onToggle={toggle}
      onRemove={remove}
    />
  );
};

export default connect(
  (state) => ({
    inputText: state.todoList.inputText,
    items: state.todoList.items,
  }),
  {
    changeInput,
    add,
    toggle,
    remove,
  }
)(TodoListContainer);
