import React, { Component } from "react";
class Form extends Component {
    state = {
        username: "",
        email: "",
        password: "",
        mobile: "",
    };
    updateHandler = (event) => {
        this.setState({ [event.target.value]: event.target.value })
    };
    submitHandler = (event) => {
        console.log(this.state);
        event.preventDefault();
    };
    render() {
        return (
            <div>
                <h1> Form Registration </h1>
                <pre>{JSON.stringify(this.state)}</pre>
                <div className="container">
                    <div className="row">
                        <div className="col-md-5">
                            <form onSubmit={this.submitHandler}>
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Please Enter User Name"
                                        onChange={this.updateHandler} name="userName" /> <br />
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Please Enter Email"
                                        onChange={this.updateHandler} name="email" /> <br />
                                </div>
                                <div className="form-group">
                                    <input type="password" className="form-control" placeholder="Please Enter Password"
                                        onChange={this.updateHandler} name="password" /> <br />
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Please Enter Mobile No"
                                        onChange={this.updateHandler} name="mobile" /> <br />
                                </div>
                                <button className="btn btn-primary"> Registration </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    };
};
export default Form;