import { createStore, compose, combineReducers } from "redux";
import dataReducer from "../reducers/data";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  combineReducers({
    data: dataReducer
  }),
  composeEnhancer()
);

export default store;
