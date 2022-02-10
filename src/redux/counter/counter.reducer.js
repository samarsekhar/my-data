import { INCREMENT, DECREMENT } from "./counter.action";
let initialState = {
    counter: 0
}
let counterReducer = (state = initialState, action) => {
    console.log(action);
    console.log(action.type);

    switch (action.type) {
        case INCREMENT:
            return { counter: state.counter + 1 }
        case DECREMENT:
            return { counter: state.counter - 1 }

        default:
            return state;
    };
};
export { counterReducer };