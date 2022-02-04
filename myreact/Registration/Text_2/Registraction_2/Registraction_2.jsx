import React, { Component } from "react";
class Registraction_2 extends Component {
    state = {
        username: ""
    }
    usernameHandler = (event) => {
        console.log(event);
        console.log(event.target);
        console.log(event.target.value);
    }
    render() {
        return (
            <div>
                <h1>Registraction Form</h1>
                <pre>{JSON.stringify(this.state)}</pre>
                <form>
                    <label>Email</label>
                    <input type="text" onChange={this.usernameHandler} placeholder="Please Enter Email" />
                    <hr />
                    <label>Password</label>
                    <input type="password" onChange={this.usernameHandler} placeholder="Please Enter Password" />
                    <hr />
                    <button>Registraction</button>
                </form>
            </div>
        )
    }
}
export default Registraction_2;