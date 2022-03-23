import React, {useState, useEffect} from "react";

const UseEffect2 = () => {
    const [count, setCount] = useState(0);

    //useEffect with Dependency List Array

    useEffect(() => {
        if(count >= 1){
            document.title = `Chats(${count})`
        }
        else{
            document.title = `Chats`
        }
        console.log("First One");
    },[count])

    useEffect(() => {
        console.log("First Wish");
    }, [])

    console.log("First OutSide");

    return(
        <div align="center">
            <h1>Count : {count}</h1>
            <button className="btn btn-warning" onClick={() => {
                setCount( count + 1)
            }}>Click</button>
        </div>
    )
}
export default UseEffect2;