import React, { useState } from "react";

let Counter = () => {
    let [counter, setCounter] = useState(0);
    return (
        <>
            <h3>Counter Value:{counter}</h3>
            <button onClick={() => { setCounter(counter + 1); }}>INCREMENT</button>
            <button onClick={() => { setCounter(counter - 1); }}>DECREMENT</button>
        </>

    )
}
export default Counter;