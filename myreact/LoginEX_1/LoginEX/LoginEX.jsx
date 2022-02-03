import React, { Component } from "react";
class LoginEX extends Component {
    state = {
        isLoggin: false,
        message: "",
    };
    loginHandler = () => {
        this.setState({ isLoggin: true, message: "Welcome to PSA" });
    };
    logoutHandler = () => {
        this.setState({ isLoggin: false, message: "All the Best" });
    };
    render() {
        return (
            <div>
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-md-8">
                            <div className="card">
                                <div className="card-header">Login Example</div>
                                <div className="card-body">
                                    {!this.state.isLoggin ? (
                                        <>
                                            <button className="btn btn-success mr-5" onClick={this.loginHandler} > Login </button>
                                        </>
                                    ) : (
                                        <>
                                            <button className="btn btn-warning" onClick={this.logoutHandler} > Logout </button>
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    };
};
export default LoginEX;