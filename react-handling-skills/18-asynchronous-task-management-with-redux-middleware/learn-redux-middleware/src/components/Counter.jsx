import React from 'react';

const Counter = ({ number, onDecrease, onIncrease }) => {
  return (
    <div>
      <h1>{number}</h1>
      <button onClick={onDecrease}>-1</button>
      <button onClick={onIncrease}>+1</button>
    </div>
  );
};

export default Counter;
