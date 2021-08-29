import React, { useState } from 'react';
import loadable from '@loadable/component';

import logo from './logo.svg';
import './App.css';

// const SplitMe = React.lazy(() => import('./SplitMe'));

// const SplitMe = loadable(() => import('./SplitMe'));
const SplitMe = loadable(() => import('./SplitMe'), {
  fallback: <div>Loading...</div>,
});

function App() {
  const [visible, setVisible] = useState(false);

  const onClick = () => {
    setVisible(true);
  };

  const onMouseOver = () => {
    SplitMe.preload();
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <p onClick={onClick} onMouseOver={onMouseOver}>
          Hello React!
        </p>

        {/* <Suspense fallback={<div>Loading...</div>}>
          {visible && <SplitMe />}
        </Suspense> */}

        {visible && <SplitMe />}
      </header>
    </div>
  );
}

export default App;
