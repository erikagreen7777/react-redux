import { ReactReduxContext } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { configure } from "@testing-library/react";
import counterReducer from "./counter";
import authReducer from "./auth";

const store = configureStore({
  //the value for reducer can be a single reducer, but if you have multiple slices, we coould set an object with any key/props with different reducers
  reducer: { counter: counterReducer, auth: authReducer },
});

export default store;
