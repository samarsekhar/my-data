import React, { useState } from "react";

let Counter = () => {
    let [qty, setQty] = useState(1);

    return <div>
        <h1>Counter Value:{qty}</h1>
        <button onClick={() => { setQty(qty + 1) }}>INCR</button>
        <button onClick={() => { setQty(qty - 1) }}>DECR</button>
    </div>
};
export default Counter;