import React, { Component } from "react";
class Messages extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: "Hello World"
        }
    };
    updateMessagesHandler = (Hello) => {
        console.log("state is updating");
        this.setState({ message: Hello })
    }
    render() {
        return (
            <>
                <div className="container mt-5">
                    <h3>Message : {this.state.message}</h3>
                    <button className="btn btn-success"
                        onClick={this.updateMessagesHandler.bind(this, "Good Morning")}>Button 1</button>
                    <button className="btn btn-primary"
                        onClick={this.updateMessagesHandler.bind(this, "Good Afteroon")}>Button 2</button>
                    <button className="btn btn-danger"
                        onClick={this.updateMessagesHandler.bind(this, "Good Night")}>Button 3</button>
                </div>
            </>
        );
    };
};
export default Messages;