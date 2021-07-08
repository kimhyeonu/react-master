import React from 'react';

import { ColorProvider } from './contexts/color';
import ColorBox from './components/ColorBox';
import SelectColors from './components/SelectColor';

const App = () => {
  return (
    <ColorProvider>
      <div>
        <SelectColors />
        <ColorBox />
      </div>
    </ColorProvider>
  );
};

export default App;
