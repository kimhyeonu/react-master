import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import qs from 'qs';

import RootStack from './screens/RootStack';

function App() {
  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
}

export default App;
