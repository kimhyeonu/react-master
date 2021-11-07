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

const items = [
  { _id: 1, name: 'React Native' },
  { _id: 2, name: 'React Navigation' },
  { _id: 3, name: 'React' },
];

const ListScreen = ({ navigation }) => {
  const _onPress = (item) => {
    navigation.navigate('Detail', {
      id: item._id,
      name: item.name,
    });
  };

  return (
    <Container>
      <StyledText>List Screen</StyledText>
      {items.map((item) => (
        <Button
          key={item._id}
          title={item.name}
          onPress={() => _onPress(item)}
        />
      ))}
    </Container>
  );
};

export default ListScreen;
