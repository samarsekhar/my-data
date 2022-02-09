import { createStore } from "redux";
import { messageReducer } from "./Message/message.reducer";

let store = createStore(messageReducer);

export { store };