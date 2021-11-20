import React, { useState } from 'react';
import { StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

import DateHead from './components/DateHead';
import EmptyList from './components/EmptyList';
import TodoList from './components/TodoList';
import TodoAdder from './components/TodoAdder';

function App() {
  const today = new Date();

  const [todos, setTodos] = useState([
    { id: 1, text: '작업 환경 설정', done: true },
    { id: 2, text: '리액트 네이티브 기초 공부', done: false },
    { id: 3, text: '할 일 목록 만들기', done: false },
  ]);

  return (
    <SafeAreaProvider>
      <SafeAreaView edges={['bottom']} style={styles.block}>
        <KeyboardAvoidingView
          behavior={Platform.select({ ios: 'padding', android: undefined })}
          style={styles.avoid}
        >
          <DateHead date={today} />

          {todos.length === 0 ? <EmptyList /> : <TodoList todos={todos} />}

          <TodoAdder />
        </KeyboardAvoidingView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  block: {
    flex: 1,
    backgroundColor: 'white',
  },
  avoid: {
    flex: 1,
  },
});

export default App;
