import React from 'react';
import styled from 'styled-components/native';

const Container = styled.TouchableOpacity`
  justify-content: center;
  margin: 10px 0px;
  padding: 15px 30px;
  border-radius: 15px;
  background-color: #3498db;
`;

const Title = styled.Text`
  font-size: 24px;
  font-weight: 600;
  color: #ffffff;
`;

const Button = ({ title, onPress }) => {
  return (
    <Container onPress={onPress}>
      <Title>{title}</Title>
    </Container>
  );
};

export default Button;
