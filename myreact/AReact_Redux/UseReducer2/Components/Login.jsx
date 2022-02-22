import React, { useRef } from "react";
function Login() {
    let LoginRef = useRef(null);
    let updateHandler = (event) => {
        console.log(LoginRef.current);
        LoginRef.current.disabled = !event.target.checked;
    };
    return (
        <div>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-6">
                        <form action="">
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Please Enter Email" /> <br />
                            </div>
                            <div className="form-group">
                                <input type="password" className="form-control" placeholder="Please Enter Password" /> <br />
                            </div>
                            <div className="form-check">
                                <input type="checkbox" className="form-check-input position-static" onChange={updateHandler} />
                                Terms and Conditions
                            </div>
                            <div className="form-group">
                                <input type="submit" className="btn btn-success" value="login" disabled ref={LoginRef} />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Login;