import React from 'react';
import { useSelector } from 'react-redux';

import TodoList from '../components/TodoList';
import { changeInput, add, toggle, remove } from '../modules/todoList';
import { useActions } from '../lib/useActions';

const TodoListContainer = () => {
  const { inputText, items } = useSelector((state) => {
    return {
      inputText: state.todoList.inputText,
      items: state.todoList.items,
    };
  });

  // [1]
  // const dispatch = useDispatch();

  // const onChangeInput = useCallback(
  //   (inputText) => dispatch(changeInput(inputText)),
  //   [dispatch]
  // );
  // const onAdd = useCallback(
  //   (inputText) => dispatch(add(inputText)),
  //   [dispatch]
  // );
  // const onToggle = useCallback((id) => dispatch(toggle(id)), [dispatch]);
  // const onRemove = useCallback((id) => dispatch(remove(id)), [dispatch]);

  // [2]
  const [onChangeInput, onAdd, onToggle, onRemove] = useActions(
    [changeInput, add, toggle, remove],
    []
  );

  return (
    <TodoList
      inputText={inputText}
      items={items}
      onAdd={onAdd}
      onChangeInput={onChangeInput}
      onToggle={onToggle}
      onRemove={onRemove}
    />
  );
};

// [1]
// export default TodoListContainer;

// [2]
export default React.memo(TodoListContainer);
