import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

const initialState = {
  count: 5,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_DATA":
      return { ...state, count: state.count + action.payload };
    case "REMOVE_DATA":
      return { ...state, count: state.count - action.payload };
    default:
      return state;
  }
};

const store = configureStore({ reducer });

console.log(`${ 3 + 7 - '2' + 5}`)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>
  </Provider>
);
