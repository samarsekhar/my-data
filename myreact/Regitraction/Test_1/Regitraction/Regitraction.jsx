import React, { Component } from "react";
class Regitraction extends Component {
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
                <h1>Regitraction Form</h1>
                <form>
                    <pre>{JSON.stringify(this.state)}</pre>
                    <label>Email</label>
                    <input type="text" onChange={this.usernameHandler} placeholder="Enter Email" />
                    <hr />
                    <label>Password</label>
                    <input type="password" onChange={this.usernameHandler} placeholder="Enter Password" />
                    <hr />
                    <button>Regitraction</button>
                </form>
            </div>
        )
    }
}
export default Regitraction;