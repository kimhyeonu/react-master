import React, { useContext } from 'react';
import styled from 'styled-components/native';

import UserContext from '../contexts/User';

const StyledText = styled.Text`
  margin: 10px;
  font-size: 24px;
`;

const User = () => {
  const { user } = useContext(UserContext);

  return <StyledText>Name: {user.name}</StyledText>;
};

export default User;
