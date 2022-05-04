import React, {useRef, useState} from "react";

const UseRef = () => {
    const [show, setShow] = useState(false)
    const yourname = useRef(null)
    const submitHandler = (event) => {
        event.preventDefault()

        const name = yourname.current.value
        name === "" ? alert("Please fill the data") : setShow(true)
    }
    return(
        <div>
            <form onSubmit={submitHandler}>
                <div>
                    <label htmlFor="yorname">Enter your name</label>
                    <input type="text" id="yourname" ref={yourname} />
                    <br />
                    <button>submit</button>
                </div>
                <p>{show ? `Your name is ${yourname.current.value}`: ""}</p>
            </form>
        </div>
    )
};
export default UseRef;