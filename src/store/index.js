// import { createStore } from 'redux';
// const redux = require('redux');
import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialCounterState = {
  counter: 0,
  showCounter: true,
};

const counterSlice = createSlice({
  name: 'counter',
  initialState: initialCounterState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter += action.payload;
    },
    toggle(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

const store = configureStore({
  reducer: counterSlice.reducer,
});

// const counterReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case 'INCREASE':
//       return {
//         ...state,
//         counter: state.counter + action.amount,
//       };
//     case 'INCREMENT':
//       return {
//         ...state,
//         counter: state.counter + 1,
//       };
//     case 'DECREMENT':
//       return {
//         ...state,
//         counter: state.counter - 1,
//       };
//     case 'TOGGLE_COUNTER':
//       return {
//         ...state,
//         showCounter: !state.showCounter,
//       };
//     default:
//       return state;
//   }
// };

// const store = createStore(counterReducer);
// const store = redux.createStore(counterReducer);

// `createSlice` automatically creates unique action identifier for each reducer
// via `actions` property (object of unique identifiers)
export const counterActions = counterSlice.actions;

export default store;
