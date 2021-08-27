import React from 'react';
import { connect } from 'react-redux';

import Counter from '../components/Counter';
import { decreaseAsync, increaseAsync } from '../modules/counter.js.old';

const CounterContainer = ({ number, decreaseAsync, increaseAsync }) => {
  return (
    <Counter
      number={number}
      onDecrease={decreaseAsync}
      onIncrease={increaseAsync}
    />
  );
};

export default connect(
  (state) => ({
    number: state.counter,
  }),
  {
    decreaseAsync,
    increaseAsync,
  }
)(CounterContainer);
