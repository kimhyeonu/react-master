import React from 'react';
import styled from 'styled-components/native';

import Dog from './components/Dog';

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #fff;
`;

const App = () => {
  return (
    <Container>
      <Dog />
    </Container>
  );
};

export default App;
