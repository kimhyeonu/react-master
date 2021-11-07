import React from 'react';
import styled from 'styled-components/native';

import { UserProvider } from './contexts/User';
import User from './components/User';
import Input from './components/Input';

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
`;

const App = () => {
  return (
    <UserProvider>
      <Container>
        <User />
        <Input />
      </Container>
    </UserProvider>
  );
};

export default App;
