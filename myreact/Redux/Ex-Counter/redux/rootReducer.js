import { combineReducers } from "redux";
import { counterReducer } from "./counter/counter.reducer";

let rootReducer = combineReducers({ counter: counterReducer });

export { rootReducer };