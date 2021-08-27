import React from 'react';
import { connect } from 'react-redux';

import Counter from '../components/Counter';
import { decrease, increase } from '../modules/counter';

const CounterContainer = ({ number, decrease, increase }) => {
  return (
    <Counter number={number} onDecrease={decrease} onIncrease={increase} />
  );
};

export default connect(
  (state) => ({
    number: state.counter,
  }),
  {
    decrease,
    increase,
  }
)(CounterContainer);
