import React, { useState } from "react";
let Message = () => {
    let [message, setMessage] = useState("Hello dude...")

    let gmHandler = () => {
        setMessage("Good Morning...dude")
    }
    let gnHandler = () => {
        setMessage("Good Night...dude")
    }
    return <React.Fragment>
        <h2>Message Component---{message}</h2>
        <button onClick={gmHandler}>Button-1</button>
        <button onClick={gnHandler}>Button-2</button>
    </React.Fragment>
};
export default Message;