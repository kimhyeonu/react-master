import React, { useState } from 'react';
import styled from 'styled-components/native';
import PropTypes from 'prop-types';

import { images } from '../images';
import IconButton from './IconButton';
import Input from './Input';

const Container = styled.View`
  flex-direction: row;
  align-items: center;
  margin: 3px 0px;
  padding: 5px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.itemBackground};
`;

const Contents = styled.Text`
  flex: 1;
  font-size: 24px;
  color: ${({ theme, completed }) => (completed ? theme.done : theme.text)};
  text-decoration-line: ${({ completed }) =>
    completed ? 'line-through' : 'none'};
`;

const Task = ({ item, toggleTask, editTask, deleteTask }) => {
  const [editable, setEditable] = useState(false);
  const [text, setText] = useState(item.text);

  const _handleEditButtonPress = () => {
    setEditable(true);
  };

  const _onSubmitEditing = () => {
    if (editable) {
      const editedTask = Object.assign({}, item, { text });
      setEditable(false);
      editTask(editedTask);
    }
  };

  const _onBlur = () => {
    if (editable) {
      setEditable(false);
      setText(item.text);
    }
  };

  return editable ? (
    <Input
      value={text}
      onChangeText={(text) => setText(text)}
      onSubmitEditing={_onSubmitEditing}
      onBlur={_onBlur}
    />
  ) : (
    <Container>
      <IconButton
        type={item.completed ? images.completed : images.uncompleted}
        id={item.id}
        onPressOut={toggleTask}
        completed={item.completed}
      />

      <Contents completed={item.completed}>{item.text}</Contents>

      {item.completed || (
        <IconButton type={images.edit} onPressOut={_handleEditButtonPress} />
      )}

      <IconButton
        type={images.delete}
        id={item.id}
        onPressOut={deleteTask}
        completed={item.completed}
      />
    </Container>
  );
};

Task.propTypes = {
  item: PropTypes.object.isRequired,
  toggleTask: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired,
};

export default Task;
