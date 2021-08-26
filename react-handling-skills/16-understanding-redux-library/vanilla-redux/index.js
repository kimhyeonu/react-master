import { createStore } from 'redux';

// DOM 엘리먼트
const toggleDisplayEl = document.querySelector('.toggle-display');
const counterEl = document.querySelector('h1');
const decreaseButtonEl = document.querySelector('#decrease-button');
const increaseButtonEl = document.querySelector('#increase-button');

// 액션
const SWITCH_TOGGLE = 'SWITCH_TOGGLE';
const DECREASE = 'DECREASE';
const INCREASE = 'INCREASE';

// 액션 생성 함수
const switchToggle = () => ({
  type: SWITCH_TOGGLE,
});
const decrease = (difference) => ({
  type: DECREASE,
  difference,
});
const increase = (difference) => ({
  type: INCREASE,
  difference,
});

// 초기 상태
// 읽기 전용 상태
const initialState = {
  active: false,
  counter: 0,
};

// 리듀서 = 순수 함수
// 1. 이전 상태와 액션 객체를 파라미터로 받는다.
// 2. 파라미터 외의 값에는 의존하면 안 된다.
// 3. 이전 상태는 절대로 건드리지 않고, 변화를 준 새로운 상태 객체를 만들어서 반환한다.
// 4. 똑같은 파라미터로 호출된 리듀서 함수는 언제나 똑같은 결과 값을 반환해야 한다.
function reducer(state = initialState, action) {
  switch (action.type) {
    case SWITCH_TOGGLE:
      return {
        ...state,
        active: !state.active,
      };

    case DECREASE:
      return {
        ...state,
        counter: state.counter - action.difference,
      };

    case INCREASE:
      return {
        ...state,
        counter: state.counter + action.difference,
      };

    default:
      return state;
  }
}

// 단일 스토어
const store = createStore(reducer);

const render = () => {
  const state = store.getState();

  if (state.active) {
    toggleDisplayEl.classList.add('active');
  } else {
    toggleDisplayEl.classList.remove('active');
  }

  counterEl.innerText = state.counter;
};

render();
store.subscribe(render);

// 액션 디스패치
toggleDisplayEl.onclick = () => {
  store.dispatch(switchToggle());
};
decreaseButtonEl.onclick = () => {
  store.dispatch(decrease(1));
};
increaseButtonEl.onclick = () => {
  store.dispatch(increase(1));
};
