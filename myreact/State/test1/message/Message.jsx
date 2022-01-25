import React, { Component } from "react";
class Message extends Component {
    state = {
        message: "hello"
    }
    gmHandler = () => {
        this.setState({ message: "Good Morning" })
    }
    gnHandler = () => {
        this.setState({ message: "Good Night" })
    }
    render() {
        return (
            <div>
                <h2>Message:{this.state.message}</h2>
                <button onClick={this.gmHandler}>Gm</button>
                <button onClick={this.gnHandler}>Gn</button>
            </div>
        )
    }
}
export default Message