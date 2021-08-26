import { createAction, handleActions } from 'redux-actions';

// 액션 타입
const DECREASE = 'counter/DECREASE';
const INCREASE = 'counter/INCREASE';

// 액션 생성 함수
// [1]
// export const decrease = () => ({
//   type: DECREASE,
// });
// export const increase = () => ({
//   type: INCREASE,
// });
// [2]
export const decrease = createAction(DECREASE);
export const increase = createAction(INCREASE);

// 초기 상태
const initialState = {
  number: 0,
};

// 리듀서
// [1]
// function counter(state = initialState, action) {
//   switch (action.type) {
//     case DECREASE:
//       return {
//         number: state.number - 1,
//       };

//     case INCREASE:
//       return {
//         number: state.number + 1,
//       };

//     default:
//       return state;
//   }
// }
// [2]
const counter = handleActions(
  {
    [DECREASE]: (state, action) => ({ number: state.number - 1 }),
    [INCREASE]: (state, action) => ({ number: state.number + 1 }),
  },
  initialState
);

export default counter;
