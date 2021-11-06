import React, { useState } from 'react';
import { StatusBar } from 'react-native';
import styled, { ThemeProvider } from 'styled-components/native';

import { theme } from './theme';
import Input from './components/Input';

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

export default function App() {
  const [newTask, setNewTask] = useState('');

  const _addTask = () => {
    alert(`새로운 할 일이 추가되었습니다.\n${newTask}`);
    setNewTask('');
  };

  const _handleChangeText = (text) => {
    setNewTask(text);
  };

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <StatusBar
          barStyle="light-content"
          backgroundColor={theme.background}
        />

        <Title>PROJECT TM</Title>

        <Input
          placeholder="+ 할 일을 입력해 주세요..."
          value={newTask}
          onChangeText={_handleChangeText}
          onSubmitEditing={_addTask}
        />
      </Container>
    </ThemeProvider>
  );
}
