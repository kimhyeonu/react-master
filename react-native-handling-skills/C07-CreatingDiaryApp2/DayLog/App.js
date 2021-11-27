import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { LogContextProvider } from './contexts/LogContext';
import { SearchContextProvider } from './contexts/SearchContext';
import RootStack from './screens/RootStack';

function App() {
  return (
    <NavigationContainer>
      <LogContextProvider>
        <SearchContextProvider>
          <RootStack />
        </SearchContextProvider>
      </LogContextProvider>
    </NavigationContainer>
  );
}

export default App;
