import React, { useState } from "react";
let initialState = { message: "Hello" };
function MessageOne() {
    let [message, setMessage] = useState(initialState);
    return (
        <div>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-6">
                        <div className="card-header">
                            <h3>Message: {message.message}</h3>
                        </div>
                        <div className="card-body">
                            <button className="btn btn-warning mr-4" onClick={() => {
                                setMessage({ message: "Good Morning" });
                            }} >
                                Button 1
                            </button>
                            <button className="btn btn-danger mr-4" onClick={() => {
                                setMessage({ message: "Good Night" })
                            }} >
                                Button 2
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default MessageOne;