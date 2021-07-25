import { useState, createContext } from 'react';

const ColorContext = createContext({
  state: {
    color: 'black',
    subColor: 'red',
  },

  actions: {
    setColor: () => {},
    setSubColor: () => {},
  },
});

const { Consumer: ColorConsumer } = ColorContext;

const ColorProvider = ({ children }) => {
  const [color, setColor] = useState('black');
  const [subColor, setSubColor] = useState('red');

  const value = {
    state: { color, subColor },
    actions: { setColor, setSubColor },
  };

  return (
    <ColorContext.Provider value={value}>{children}</ColorContext.Provider>
  );
};

export { ColorConsumer, ColorProvider };

export default ColorContext;
