import { gmAction, gnAction } from "../redux/Message/message.action";
import { useDispatch, useSelector } from "react-redux";
let Message = () => {
    let dispatch = useDispatch();
    let message = useSelector((state) => {
        return state
    });
    let msg = "Hello"
    let gmHandler = () => {
        console.log("Good morning - message view");
        dispatch(gmAction());
    }
    let gnHandler = () => {
        dispatch(gnAction());
    }
    return <div>
        <h6>Message Component</h6>
        <br />
        <h4>Your Message:{message.msg}</h4>
        <pre>{JSON.stringify(message)}</pre>
        <button onClick={gmHandler}>GM</button>
        <button onClick={gnHandler}>GN</button>
    </div>
};
export default Message;