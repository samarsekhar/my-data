import React, { Component } from "react";
class Message extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: "Hello...How are you"
        }
    }
    messageHandler = () => {
        this.setState({ message: "Hii.. I am Good and What about you" })
    }
    componentDidMount() {
        console.log(" Birth : Third - ComponentDidMount method or render method ");
    }
    componentWillUpdate() {
        console.log(" update : Executing and time of , updating component data using setState ");
    }
    componentWillUnmount() {
        console.log(" Death: componentWillUnmout execute - Finally ");
    }
    render() {
        return (
            <div>
                <h1>Message Component</h1>
                <h2>Message : {this.state.message}</h2>
                <button onClick={this.messageHandler}> Click </button>
            </div>
        )
    };
};
export default Message;