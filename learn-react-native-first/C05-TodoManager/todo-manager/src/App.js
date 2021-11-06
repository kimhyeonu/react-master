import React, { useState } from 'react';
import { StatusBar, Dimensions } from 'react-native';
import styled, { ThemeProvider } from 'styled-components/native';
import { AppLoading } from 'expo';
import AsyncStorage from '@react-native-community/async-storage';

import { theme } from './theme';
import Input from './components/Input';
import Task from './components/Task';

const Container = styled.SafeAreaView`
  flex: 1;
  justify-content: flex-start
  align-items: center;
  background-color: ${({ theme }) => theme.background};
`;

const Title = styled.Text`
  font-size: 40px;
  font-weight: 600;
  color: ${({ theme }) => theme.main};
  align-self: flex-start;
  margin: 0px 20px;
`;

const TaskList = styled.ScrollView`
  flex: 1;
  width: ${({ width }) => width - 40}px;
`;

export default function App() {
  const width = Dimensions.get('window').width;

  const [prepared, setPrepared] = useState(false);

  const [newTask, setNewTask] = useState('');
  const [tasks, setTasks] = useState({});

  const _saveTasks = async (tasks) => {
    try {
      await AsyncStorage.setItem('tasks', JSON.stringify(tasks));
      setTasks(tasks);
    } catch (e) {
      console.error(e);
    }
  };

  const _loadTasks = async () => {
    const loadedTasks = await AsyncStorage.getItem('tasks');
    setTasks(JSON.parse(loadedTasks || '{}'));
  };

  const _addTask = () => {
    const objectId = Date.now().toString();
    const taskObject = {
      [objectId]: { id: objectId, text: newTask, completed: false },
    };

    setNewTask('');
    setTasks({
      ...tasks,
      ...taskObject,
    });
    _saveTasks({ ...tasks, ...taskObject });
  };

  const _editTask = (item) => {
    const currentTasks = Object.assign({}, tasks);
    currentTasks[item.id] = item;
    setTasks(currentTasks);
    _saveTasks(currentTasks);
  };

  const _deleteTask = (id) => {
    const currentTasks = Object.assign({}, tasks);
    delete currentTasks[id];
    setTasks(currentTasks);
    _saveTasks(currentTasks);
  };

  const _toggleTask = (id) => {
    const currentTasks = Object.assign({}, tasks);
    currentTasks[id]['completed'] = !currentTasks[id]['completed'];
    setTasks(currentTasks);
    _saveTasks(currentTasks);
  };

  const _handleChangeText = (text) => {
    setNewTask(text);
  };

  const _onBlur = () => {
    setNewTask('');
  };

  return prepared ? (
    <ThemeProvider theme={theme}>
      <Container>
        <StatusBar
          barStyle="light-content"
          backgroundColor={theme.background}
        />

        <Title>Todo Manager</Title>

        <Input
          placeholder="+ 할 일을 입력해 주세요..."
          value={newTask}
          onChangeText={_handleChangeText}
          onSubmitEditing={_addTask}
          onBlur={_onBlur}
        />

        <TaskList width={width}>
          {Object.values(tasks)
            .reverse()
            .map((item) => (
              <Task
                key={item.id}
                item={item}
                toggleTask={_toggleTask}
                editTask={_editTask}
                deleteTask={_deleteTask}
              />
            ))}
        </TaskList>
      </Container>
    </ThemeProvider>
  ) : (
    <AppLoading
      startAsync={_loadTasks}
      onFinish={() => setPrepared(true)}
      onError={console.error}
    />
  );
}
