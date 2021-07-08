import React, { createContext, useState } from 'react';

// createContext()의 기본값은 실제 Provider의 value에 넣는 객체의 형태와 일치시켜 주는 것이 좋다.
const ColorContext = createContext({
  state: {
    color: 'black',
    subcolor: 'red',
  },
  actions: {
    setColor: () => {},
    setSubcolor: () => {},
  },
});

const ColorProvider = ({ children }) => {
  const [color, setColor] = useState('black');
  const [subcolor, setSubcolor] = useState('red');

  const value = {
    state: { color, subcolor },
    actions: { setColor, setSubcolor },
  };

  return (
    <ColorContext.Provider value={value}>{children}</ColorContext.Provider>
  );
};

// const ColorConsumer = ColorContext.Consumer;
const { Consumer: ColorConsumer } = ColorContext;

export { ColorProvider, ColorConsumer };

export default ColorContext;
