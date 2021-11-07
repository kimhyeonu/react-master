import React from 'react';
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

const DetailScreen = ({ route }) => {
  return (
    <Container>
      <StyledText>Detail Screen</StyledText>

      <StyledText>ID: {route.params.id}</StyledText>
      <StyledText>Name: {route.params.name}</StyledText>
    </Container>
  );
};

export default DetailScreen;
