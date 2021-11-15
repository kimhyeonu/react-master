import React from 'react';
import {SafeAreaView, View, Text, StyleSheet} from 'react-native';

import DateHead from './components/DateHead';

function App() {
  const today = new Date();
  console.log(today);

  return (
    <SafeAreaView>
      <View>
        <DateHead date={today} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});

export default App;
