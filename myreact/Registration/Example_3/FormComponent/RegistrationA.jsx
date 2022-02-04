import React, { Component } from "react";

class RegistrationA extends Component {
    state = {
        username: "",
        email: "",
        password: "",
        mobile: "",
    };
    updateHandler = (event) => {
        this.setState({
            [event.target.value]:
                event.target.value
        });
    };
    submitHandler = (event) => {
        console.log(this.state);
        event.preventDefault();
    };
    render() {
        return (
            <div>
                <pre>{JSON.stringify(this.state)}</pre>
                <div className="container">
                    <div className="row">
                        <div className="col-md-5">
                            <form onSubmit={this.onsubmitHandler}>
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="User Name"
                                        onChange={this.updateHandler} name="userName" /> <br />
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Email"
                                        onChange={this.updateHandler} name="email" />  <br />
                                </div>
                                <div className="form-group">
                                    <input type="password" className="form-control" placeholder="Password"
                                        onChange={this.updateHandler} name="password" /> <br />
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Mobile"
                                        onChange={this.updateHandler} name="mobile" />  <br />
                                </div>
                                <button className="btn btn-success"> Registration</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    };
};
export default RegistrationA;