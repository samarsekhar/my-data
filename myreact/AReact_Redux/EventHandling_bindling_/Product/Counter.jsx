import React, { Component } from "react";
class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 1,
        };
        console.log("First");
    };
    incrementHandler = () => {
        console.log("Third");
        this.setState({ counter: 100 });
    };
    render() {
        console.log("Second");
        return (
            <>
                <h2>Counter Value: {this.state.counter}</h2>
                <button onClick={() => { this.incrementHandler(); }}> Button </button>
            </>
        );
    };
};
export default Counter;