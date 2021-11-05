import React from 'react';
import styled from 'styled-components/native';

const ButtonContainer = styled.TouchableOpacity`
  justify-content: center;
  margin: 10px 0px;
  padding: 15px 40px;
  background-color: ${(props) =>
    props.title === 'Hanbit' ? props.theme.blue : props.theme.purple};
  border-radius: 15px;
`;

const Title = styled.Text`
  font-size: 20px;
  font-weight: 600;
  color: ${(props) => props.theme.text};
`;

const Button = (props) => {
  return (
    <ButtonContainer title={props.title}>
      <Title>{props.title}</Title>
    </ButtonContainer>
  );
};

export default Button;
