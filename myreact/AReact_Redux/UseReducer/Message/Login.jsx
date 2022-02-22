import React, { useRef } from "react";
function Login() {
    let loginRef = useRef(null);
    let updateHandler = (event) => {
        console.log(loginRef.current);
        loginRef.current.disabled = !event.target.checked;
    };
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <form action="">
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Email" />Email
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Password" />Password
                            </div>
                            <div className="form-check">
                                <input type="checkbox" className="form-check-input position-static" onChange={updateHandler} />
                                Terms and Conditions
                            </div>
                            <div className="form-group">
                                <input type="submit" className="btn btn-success" value="login" disabled ref={loginRef} />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Login;