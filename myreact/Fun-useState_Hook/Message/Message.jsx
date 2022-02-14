import React, { useState } from "react";

let Message = () => {
    let [meassage, setMessage] = useState("Hello....");
    return (
        <>
            <h1>Message : {meassage}</h1>
            <button onClick={() => { setMessage("Good Morning"); }}>Click Here</button>
            <button onClick={() => { setMessage("Good Afternoon"); }}>Click Here</button>
            <button onClick={() => { setMessage("Good Night"); }}>Click Here</button>
        </>

    )
}
export default Message;