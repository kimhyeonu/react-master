import React from 'react';
import { View } from 'react-native';

import { Header, Contents, Footer } from './components/Layout';
import ShadowBox from './components/ShadowBox';
import { viewStyles } from './styles';

const App = () => {
  return (
    <View style={viewStyles.container}>
      <ShadowBox />
    </View>
  );
};

export default App;
