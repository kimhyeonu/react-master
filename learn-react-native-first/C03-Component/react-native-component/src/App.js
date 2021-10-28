import React from 'react';
import { Text, View, Button } from 'react-native';

import EventInput from './components/EventInput';

const App = () => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <EventInput />
    </View>
  );
};

export default App;
