import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import styled from 'styled-components/native';

import StackNavigation from './navigations/StackNavigation';

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
`;

const App = () => {
  return (
    <NavigationContainer>
      <StackNavigation />
    </NavigationContainer>
  );
};

export default App;
