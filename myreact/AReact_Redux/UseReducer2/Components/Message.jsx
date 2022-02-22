import React, { useReducer } from "react";
let initialState = { message: "Hello Everyone, Everything is Good" };
let reducer = (state = initialState, action) => {
    switch (action) {
        case "gm":
            return { message: "Good Morning" };
        case "gn":
            return { message: "Good Night" };
        default:
            return state
    }
}
let Message = () => {
    let [state, dispatch] = useReducer(reducer, initialState);
    return (
        <div>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-header">
                                <h3>Message: {state.message}</h3>
                            </div>
                            <div className="card-body">
                                <button className="btn btn-primary mr-2" onClick={() => { dispatch("gm") }} >
                                    Button 1
                                </button>
                                <button className="btn btn-warning mr-2" onClick={() => { dispatch("gn") }} >
                                    Button 2
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Message;