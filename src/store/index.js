import { ReactReduxContext } from "react-redux";
import { createSlice, configureStore } from "@reduxjs/toolkit";
import { configure } from "@testing-library/react";

const initialState = { counter: 0, showCounter: true };

//slice of global state. you can create different slices to help make it more maintainable
const counterSlice = createSlice({
  //ever slice needs a name
  name: "counter",
  initialState,
  reducers: {
    increment(state) {
      //redux toolkit detects code, automatically clones, and change the state immutably
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      //   state.counter = state.counter + action.amount;
      state.counter += action.payload; // <---- payload is from redux, 
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

const store = configureStore({
  //the value for reducer can be a single reducer, but if you have multiple slices, we coould set an object with any key/props with different reducers
  reducer: counterSlice.reducer,
});

export const counterActions = counterSlice.actions;

export default store;
