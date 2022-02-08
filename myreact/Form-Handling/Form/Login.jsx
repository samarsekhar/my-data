import React, { useState } from "react";

let Login = () => {
    let [user, setUser] = useState({ email: "", password: "" });
    let updateFormHandler = (event) => {
        setUser({ user, [event.target.name]: event.target.value });
    };
    let submitHandler = (event) => {
        alert(JSON.stringify(user));
        event.preventDefault();
    };
    return (
        <>
            <div className="container mt-5">
                <pre>{JSON.stringify(user)}</pre>
                <div className="row">
                    <div className="col-md-4">
                        <form action="" onSubmit={submitHandler}>
                            <div className="form-group">
                                <input type="text"
                                    className="form-control" placeholder="Please Enter Email"
                                    name="email" onChange={updateFormHandler} /> <br />
                            </div>
                            <div className="from-group">
                                <input type="password"
                                    className="form-control" placeholder="Please Enter Password"
                                    name="password" onChange={updateFormHandler} /> <br />
                            </div>
                            <input type="submit" value="login" className="btn btn-success" />
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
};
export default Login;