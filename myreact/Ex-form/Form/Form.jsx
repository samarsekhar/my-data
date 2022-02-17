import React, { useState } from "react";

let Form = () => {
    let [name, setName] = useState("");
    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");
    let [submitted, setSubmitted] = useState(false);
    let [error, setError] = useState(false);

    let HandleName = (event) => {
        setName(event.target.value);
        setSubmitted(false);
    }
    let HandleEmail = (event) => {
        setEmail(event.target.value);
        setSubmitted(false);
    }
    let HandlePassword = (event) => {
        setPassword(event.target.value);
        setSubmitted(false);
    }

    let HandleSubmitted = (event) => {
        event.praventDefault();
        if (name === "" || email === "" || password === "") {
            setError(true);
        }
        else {
            setSubmitted(true);
            setError(false);
        }
    };
    let successMessage = () => {
        return (
            <div className="success" style={{ display: submitted ? "" : null, }}>
                <h1>User {name} successfully Registered !</h1>
            </div>
        );
    };
    let errorMessage = () => {
        return (
            <div className="error" style={{ display: error ? "" : null, }}>
                <h1>Please enter your all the fields</h1>
            </div>
        );
    };
    return (
        <div className="form">
            <div>
                <h1>Registration</h1>
            </div>
            <div className="messages">
                {errorMessage()}
                {successMessage()}
            </div>
            <from>
                <label className="lable">Name: </label>
                <input type="text" onChange={HandleName} className="input" value={name} />
                <br /><br />

                <label className="lable">Email: </label>
                <input type="email" onChange={HandleEmail} className="input" value={email} />
                <br /><br />

                <label className="lable">Password: </label>
                <input type="password" onChange={HandlePassword} className="input" value={password} />
                <br /><br />

                <button type="Submit" className="btn btn-success" onClick={HandleSubmitted}>Submit</button>
            </from>
        </div>
    )
};
export default Form;