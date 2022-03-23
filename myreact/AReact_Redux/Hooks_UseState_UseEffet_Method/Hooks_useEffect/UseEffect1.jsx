import React, {useState, useEffect} from "react";

const UseEffect = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if(count >= 1){
            document.title = `Chats(${count})`
        }
        else{
            document.title = `Chats`
        }
    })
    console.log("Hello OutSide");

    return(
        <div align="center">
            <h1>Count : {count}</h1>
            <button className="btn btn-warning" onClick={() => {
                setCount( count + 1)
            }}>Click</button>
        </div>
    )
}
export default UseEffect;