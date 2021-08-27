import { createAction, handleActions } from 'redux-actions';

const DECREASE = 'counter/DECREASE';
const INCREASE = 'counter/INCREASE';

export const decrease = createAction(DECREASE);
export const increase = createAction(INCREASE);

const initialState = 0;

const counter = handleActions(
  {
    [DECREASE]: (state) => state - 1,
    [INCREASE]: (state) => state + 1,
  },
  initialState
);

export default counter;
