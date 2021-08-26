import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Counter from '../components/Counter';
import { decrease, increase } from '../modules/counter';

// [1]
// const CounterContainer = () => {
//   const number = useSelector((state) => state.counter.number);
//   const dispatch = useDispatch();

//   return (
//     <Counter
//       number={number}
//       onDecrease={() => dispatch(decrease())}
//       onIncrease={() => dispatch(increase())}
//     />
//   );
// };

// [2]
const CounterContainer = () => {
  const number = useSelector((state) => state.counter.number);
  const dispatch = useDispatch();

  const onDecrease = useCallback(() => dispatch(decrease()), [dispatch]);
  const onIncrease = useCallback(() => dispatch(increase()), [dispatch]);

  return (
    <Counter number={number} onDecrease={onDecrease} onIncrease={onIncrease} />
  );
};

export default CounterContainer;
