import { createStore } from 'redux';

const divToggle = document.querySelector('.toggle');
const counter = document.querySelector('h1');
const buttonIncrease = document.querySelector('#increase');
const buttonDecrease = document.querySelector('#decrease');

const TOGGLE_SWITCH = 'TOGGLE_SWITCH';
const INCREASE = 'INCREASE';
const DECREASE = 'DECREASE';

const toggleSwitch = () => ({
  type: TOGGLE_SWITCH,
});
const increase = (difference) => ({
  type: INCREASE,
  difference,
});
const decrease = () => ({
  type: DECREASE,
});

const initialState = {
  toggleActivated: false,
  counter: 0,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_SWITCH:
      return {
        ...state,
        toggleActivated: !state.toggleActivated,
      };

    case INCREASE:
      return {
        ...state,
        counter: state.counter + action.difference,
      };

    case DECREASE:
      return {
        ...state,
        counter: state.counter - 1,
      };

    default:
      return state;
  }
}

const store = createStore(reducer);

const render = () => {
  const state = store.getState();

  if (state.toggleActivated) {
    divToggle.classList.add('active');
  } else {
    divToggle.classList.remove('active');
  }

  counter.innerText = state.counter;
};

divToggle.onclick = () => {
  store.dispatch(toggleSwitch());
};

buttonIncrease.onclick = () => {
  store.dispatch(increase(1));
};

buttonDecrease.onclick = () => {
  store.dispatch(decrease());
};

render();
store.subscribe(render);
