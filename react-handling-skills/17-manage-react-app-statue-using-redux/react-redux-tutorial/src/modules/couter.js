// 액션 타입
const DECREASE = 'counter/DECREASE';
const INCREASE = 'counter/INCREASE';

// 액션 생성 함수
export const decrease = () => ({
  type: DECREASE,
});
export const increase = () => ({
  type: INCREASE,
});

// 초기 상태
const initialState = {
  number: 0,
};

// 리듀서
function counter(state = initialState, action) {
  switch (action.type) {
    case DECREASE:
      return {
        number: state.number - 1,
      };

    case INCREASE:
      return {
        number: state.number + 1,
      };

    default:
      return state;
  }
}

export default counter;
