import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { LogContextProvider } from './contexts/LogContext';
import RootStack from './screens/RootStack';

function App() {
  return (
    <NavigationContainer>
      <LogContextProvider>
        <RootStack />
      </LogContextProvider>
    </NavigationContainer>
  );
}

export default App;
