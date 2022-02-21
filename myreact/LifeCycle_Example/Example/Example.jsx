import React, { useState, useEffect } from "react";

function Example() {
    let [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `You Clicked ${count} times`;
    })
    return (
        <div>
            <p>You Clicked{count}times</p>
            <button onClick={() => setCount(count + 1)}> Click Me</button>
        </div>
    )
};
export default Example;