import { createAction, handleActions } from 'redux-actions';
import { delay, put, takeEvery, takeLatest } from 'redux-saga/effects';

const DECREASE = 'counter/DECREASE';
const INCREASE = 'counter/INCREASE';

const DECREASE_ASYNC = 'counter/DECREASE_ASYNC';
const INCREASE_ASYNC = 'counter/INCREASE_ASYNC';

export const decrease = createAction(DECREASE);
export const increase = createAction(INCREASE);

export const decreaseAsync = createAction(DECREASE_ASYNC, () => undefined);
export const increaseAsync = createAction(INCREASE_ASYNC, () => undefined);

function* decreaseSaga() {
  yield delay(1000);
  yield put(decrease());
}

function* increaseSaga() {
  yield delay(1000);
  yield put(increase());
}

export function* counterSaga() {
  yield takeLatest(DECREASE_ASYNC, decreaseSaga);
  yield takeEvery(INCREASE_ASYNC, increaseSaga);
}

const initialState = 0;

const counter = handleActions(
  {
    [DECREASE]: (state) => state - 1,
    [INCREASE]: (state) => state + 1,
  },
  initialState
);

export default counter;
