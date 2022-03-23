import React, {useState, useEffect} from "react";

const UseEffect = () => {
    const [count, setCount] = useState(0);
    
    // useEffect be on the top level of our components.
    // If we want to run effect conditionally.
    // we can put the condition inside our hook.
    // ex : If and else

    useEffect(() =>{
        if(count >= 1){
            document.title = `chats(${count})`
        }
        else{
            document.title=`chats`
        }
    })
    console.log("Hello Outside");
    return(
        <div align="center">
            <h1>{count}</h1>
            <button className="btn btn-primary" onClick={() =>{
                setCount(count + 1)
            }}> Click</button>
        </div>
    )
}
export default UseEffect;