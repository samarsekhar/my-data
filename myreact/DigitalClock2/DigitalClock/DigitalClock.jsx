import React, { useState, useEffect } from "react";
let DigitalClock = () => {
    let [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());
    useEffect(() => {
        let timer = setInterval(() => {
            setCurrentTime(new Date().toLocaleTimeString());
        }, 1000);
        return () => {
            clearInterval(timer);
            console.log("componentWillUnmount - feature is execute after moving to another component");
        };
    }, []);
    return (
        <>
            <div>
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-md-8">
                            <div className="card">
                                <div className="card-header">
                                    <h3>{currentTime}</h3>
                                </div>
                                <div className="card-body"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};
export default DigitalClock;