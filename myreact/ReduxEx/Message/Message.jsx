import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { gmAction, gnAction } from "../redux/message/message.action";

let Message = () => {
    let dispatch = useDispatch();
    let msg = useSelector((state) => { return state.message });

    let gmHandler = () => {
        dispatch(gmAction());
    }
    let gnHandler = () => {
        dispatch(gnAction());
    }
    return (
        <div>
            <h2>Message Component</h2>
            <br />
            <pre>{JSON.stringify(msg)}</pre>
            {<h3>Message : {msg.message}</h3>}
            <button className="btn btn-success mr-2" onClick={gmHandler}>Click</button>
            <button className="btn btn-warning mr-2" onClick={gnHandler}>Click</button>
        </div>
    )
};
export default Message;