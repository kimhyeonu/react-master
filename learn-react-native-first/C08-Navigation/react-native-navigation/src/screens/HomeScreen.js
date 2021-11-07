import React from 'react';
import { Button } from 'react-native';
import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const StyledText = styled.Text`
  margin-bottom: 10px;
  font-size: 30px;
`;

const HomeScreen = ({ navigation }) => {
  return (
    <Container>
      <StyledText>Home Screen</StyledText>
      <Button
        title="리스트 화면으로 이동"
        onPress={() => navigation.navigate('List')}
      />
    </Container>
  );
};

export default HomeScreen;
