import React, {useState, useEffect, useRef} from "react";

const Hooktimer = () => {
    const [timer, setTimer] = useState(0);
    const intervalRef = useRef()

    useEffect(() => {
        intervalRef.current = setInterval(() => {
            setTimer(preventTimer => preventTimer + 1)
        }, 1000)

        return() => {
            clearInterval(intervalRef.current)
        }
    }, [])
    return(
        <div align="center">
            <h1> Hook Timer - {timer}</h1>
            <button onClick={() =>{clearInterval(intervalRef.current)}}>Stop Timer</button>
        </div>
    )
}
export default Hooktimer;