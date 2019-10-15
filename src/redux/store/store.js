import { createStore, compose, combineReducers } from "redux";
import dataReducer from "../reducers/data";

let composeEnhancer;

if (process.env.NODE_ENV === "development") {
  composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
} else {
  composeEnhancer = compose;
}

const store = createStore(
  combineReducers({
    data: dataReducer
  }),
  composeEnhancer()
);

export default store;
