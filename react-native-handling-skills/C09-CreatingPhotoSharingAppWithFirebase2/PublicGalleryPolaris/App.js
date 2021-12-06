import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { MemberContextProvider } from './contexts/MemberContext';
import RootStack from './screens/RootStack';

function App() {
  return (
    <MemberContextProvider>
      <NavigationContainer>
        <RootStack />
      </NavigationContainer>
    </MemberContextProvider>
  );
}

export default App;
