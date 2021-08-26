import React from 'react';

import { ColorProvider } from './contexts/color';
import ColorBox from './components/ColorBox';
import ColorSelector from './components/ColorSelector';

const App = () => {
  return (
    <ColorProvider>
      <div>
        <ColorSelector />
        <ColorBox />
      </div>
    </ColorProvider>
  );
};

export default App;
