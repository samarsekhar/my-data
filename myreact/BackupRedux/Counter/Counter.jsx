import React from "react";
import { incrAction, decrAction } from "../redux/counter/counter.action";
import { useDispatch, useSelector } from "react-redux";

let Counter = () => {
    let counter = useSelector((state) => {
        return state.counter;
    })
    let dispatch = useDispatch();
    let incrHandler = () => {
        dispatch(incrAction());
    }
    let decrHandler = () => {
        dispatch(decrAction());
    }
    return (
        <div>
            <pre>{JSON.stringify(counter)}</pre>
            <h1>Counter Value:{counter.counter}</h1>
            <button onClick={incrHandler}>INCREMENT</button>
            <button onClick={decrHandler}>DECREMENT</button>
        </div>
    );
};
export default Counter;