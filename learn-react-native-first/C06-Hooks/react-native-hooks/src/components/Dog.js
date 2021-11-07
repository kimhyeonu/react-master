import React from 'react';
import styled from 'styled-components/native';

import { useFetch } from '../hooks/useFetch';

const StyledImage = styled.Image`
  width: 300px;
  height: 300px;
  background-color: #7f8c8d;
`;

const ErrorMessage = styled.Text`
  font-size: 18px;
  color: #e74c3c;
`;

const LoadingMessage = styled.Text`
  font-size: 18px;
  color: #2ecc71;
`;

const URL = 'https://dog.ceo/api/breeds/image/random';

const Dog = () => {
  const { data, error, loading } = useFetch(URL);

  return (
    <>
      {loading && (
        <LoadingMessage>The API request is in progress.</LoadingMessage>
      )}
      <StyledImage source={data?.message ? { uri: data.message } : null} />
      <ErrorMessage>{error?.message}</ErrorMessage>
    </>
  );
};

export default Dog;
