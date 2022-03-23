import React, {useState, useEffect} from "react";

//Clean up function used in useEffect removing the events.
//That is it first removes the old added listener from CleanUp function add adds the new listener.

const UseEffectCleanup = () => {
    const [widthcount, setWidthcount] = useState(window.screen.width)

    const actualWidth = () => {
        console.log(window.innerWidth);
        setWidthcount(window.innerWidth)
    }

    useEffect(() => {
        console.log("Add Event");
        window.addEventListener("resize" ,actualWidth)
        return() => {
            console.log("remove event");
            window.removeEventListener("resize", actualWidth)
        }
    })
    return(
        <div>
            <h1 align="center">The actual size of window is : </h1>
            <h2 align="center">{widthcount}</h2>
        </div>
    )
}
export default UseEffectCleanup;