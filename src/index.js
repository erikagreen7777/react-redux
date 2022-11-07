import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

import "./index.css";
import App from "./App";

import store from "./store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  //only wrapped (by Provider) components and their children have access to redux store
  <Provider store={store}>
    <App />
  </Provider>
);
