import React, { useState, useContext } from 'react';
import styled from 'styled-components/native';

import UserContext from '../contexts/User';

const StyledInput = styled.TextInput`
  width: 250px;
  margin: 10px;
  padding: 10px 15px;
  border: 1px solid #606060;
  font-size: 24px;
`;

const Input = () => {
  const [name, setName] = useState('');
  const { dispatch } = useContext(UserContext);

  return (
    <StyledInput
      value={name}
      onChangeText={(text) => setName(text)}
      onSubmitEditing={() => {
        dispatch(name);
        setName('');
      }}
      placeholder="Enter a name..."
      autoCapitalize="none"
      autoCorrect={false}
      returnKeyType="done"
    />
  );
};

export default Input;
