import React from 'react';
import { Text } from 'react-native';

export default function App() {
  const textElement = React.createElement(Text, null, 'Hello world!');
  return textElement;
}
