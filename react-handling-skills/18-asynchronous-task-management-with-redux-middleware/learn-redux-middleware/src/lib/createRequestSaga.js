import { call, put } from 'redux-saga/effects';
import { startLoading, endLoading } from '../modules/loading';

const createRequesetSaga = (type, request) => {
  const SUCCESS = `${type}_SUCCESS`;
  const FAILURE = `${type}_FAILURE`;

  return function* (action) {
    yield put(startLoading(type));

    try {
      const response = yield call(request, action.payload);
      yield put({
        type: SUCCESS,
        payload: response.data,
      });
    } catch (e) {
      yield put({
        type: FAILURE,
        payload: 0,
        error: true,
      });
    }

    yield put(endLoading(type));
  };
};

export default createRequesetSaga;
