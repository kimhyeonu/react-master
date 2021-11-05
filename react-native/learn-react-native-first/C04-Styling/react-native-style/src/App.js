import React, { useState } from 'react';
import { Switch } from 'react-native';
import styled, { ThemeProvider } from 'styled-components/native';

import { lightTheme, darkTheme } from './theme';
import Button from './components/Button';

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.background};
`;

const App = () => {
  const [isDark, setIsDark] = useState(false);
  const _toggleSwitch = () => setIsDark(!isDark);

  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <Container>
        <Switch value={isDark} onValueChange={_toggleSwitch} />

        <Button title="Hanbit" />
        <Button title="React Native" />
      </Container>
    </ThemeProvider>
  );
};

export default App;
