import { combineReducers } from "redux";
import { messageReducer } from "./message/message.reducer";

let rootReducer = combineReducers({ message: messageReducer })

export { rootReducer };