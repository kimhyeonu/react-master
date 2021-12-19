import React, { useState } from 'react';
import {
  View,
  SafeAreaView,
  FlatList,
  Text,
  TextInput,
  Pressable,
  StyleSheet,
} from 'react-native';

import useTodos from '../hooks/useTodos';
import useTodosActions from '../hooks/useTodoActions';

function BlackButton({ onPress, title }: { onPress(): void; title: string }) {
  return (
    <Pressable
      style={styles.button}
      onPress={onPress}
      android_ripple={{ color: 'white' }}
    >
      <Text style={styles.buttonText}>{title}</Text>
    </Pressable>
  );
}

function TodoItem({
  id,
  title,
  done,
}: {
  id: number;
  title: string;
  done: boolean;
}) {
  const { remove, toggle } = useTodosActions();

  const onRemove = () => {
    remove(id);
  };

  const onToggle = () => {
    toggle(id);
  };

  return (
    <View style={styles.todoItem}>
      <Pressable onPress={onToggle} style={styles.toggle}>
        <Text style={done && styles.doneText}>{title}</Text>
      </Pressable>

      <BlackButton onPress={onRemove} title="제거" />
    </View>
  );
}

function TodoList() {
  const todos = useTodos();

  return (
    <FlatList
      style={styles.todoList}
      data={todos}
      renderItem={({ item }) => (
        <TodoItem id={item.id} title={item.title} done={item.done} />
      )}
      keyExtractor={(item) => item.id.toString()}
      ItemSeparatorComponent={() => <View style={styles.separator} />}
      ListFooterComponent={() => <View style={styles.separator} />}
    />
  );
}

function TodoInput() {
  const [text, setText] = useState('');

  const { add } = useTodosActions();

  const onPress = () => {
    add(text);
    setText('');
  };

  return (
    <View style={styles.inputWrapper}>
      <TextInput
        style={styles.input}
        placeholder="할 일을 입력해 주세요..."
        value={text}
        onChangeText={setText}
      />

      <BlackButton onPress={onPress} title="추가" />
    </View>
  );
}

function TodoApp() {
  return (
    <SafeAreaView style={styles.block}>
      <TodoList />
      <TodoInput />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  block: {
    flex: 1,
  },
  inputWrapper: {
    flexDirection: 'row',
    borderColor: 'black',
    borderTopWidth: 1,
    borderBottomWidth: 1,
  },
  input: {
    flex: 1,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: 'black',
  },
  buttonText: {
    color: 'white',
  },
  todoList: {
    flex: 1,
  },
  todoItem: {
    flexDirection: 'row',
  },
  toggle: {
    flex: 1,
    justifyContent: 'center',
  },
  doneText: {
    textDecorationLine: 'line-through',
  },
  separator: {
    height: 1,
    backgroundColor: 'black',
  },
});

export default TodoApp;
