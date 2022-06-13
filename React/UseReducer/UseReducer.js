import React, { useReducer } from "react";

const initialState = 0;

const reducer = (count, action) => {
    console.log(count, action);
    if(action.type === "INCREMENT"){
        return count + 1;
    }
    if(action.type === "DECREMENT"){
        return count - 1;
    }
    return count;
}

const UseReducer = () => {
    const [count, dispatch] = useReducer(reducer, initialState);

    return(
        <>
        <div align="center">
            <h2>React useReducer hooks</h2>
            <p>{count}</p>
            <div>
                <button onClick={() => dispatch({type: "INCREMENT"})}> INCREMENT</button> <br/> <br/>
                <button onClick={() => dispatch({type: "DECREMENT"})}> DECREMENT</button>
            </div>
        </div>
        </>
    )
}

export default UseReducer;