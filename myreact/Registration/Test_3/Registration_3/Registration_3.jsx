import React, { Component } from "react";
class Registration_3 extends Component {
    state = {
        username: ""
    }
    usernameHandler = (event) => {
        console.log(event.target.value);
        this.setState({ username: event.target.value })
    }
    sumbitHandler = (event) => {
        console.log(event);
        event.preventDefault();
    }
    render() {
        return (
            <>
                <h1>Registration Form</h1>
                <pre>{JSON.stringify(this.state)}</pre>
                <form onSubmit={this.sumbitHandler}>
                    <label>User Name</label>
                    <input type="text" onChange={this.usernameHandler} placeholder="Enter User Name" />
                    <br />
                    <label>Password</label>
                    <input type="password" onChange={this.usernameHandler} placeholder="Enter Password" />
                    <br />

                    <input type="submit" value="Registration" />
                </form>
            </>
        );
    }
}
export default Registration_3;