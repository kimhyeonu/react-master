import React from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

import DateHead from './components/DateHead';
import EmptyList from './components/EmptyList';
import TodoAdder from './components/TodoAdder';

function App() {
  const today = new Date();
  console.log(today);

  return (
    <SafeAreaProvider>
      <SafeAreaView edges={['bottom']} style={styles.block}>
        <DateHead date={today} />

        <EmptyList />

        <TodoAdder />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  block: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export default App;
