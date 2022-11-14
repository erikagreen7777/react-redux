import { createSlice } from "@reduxjs/toolkit";

const initialCounterState = { counter: 0, showCounter: true };

//slice of global state. you can create different slices to help make it more maintainable
const counterSlice = createSlice({
  //ever slice needs a name
  name: "counter",
  initialState: initialCounterState,
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
export const counterActions = counterSlice.actions;

export default counterSlice.reducer