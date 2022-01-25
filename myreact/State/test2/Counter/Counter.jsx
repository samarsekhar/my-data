import React from "react";
class Counter extends React.Component {
    state = {
        qty: 1
    }
    incrementHandler = () => {
        this.setState({ qty: this.state.qty + 1 })
    }
    decrementHandler = () => {
        this.setState({ qty: this.state.qty - 1 })
    }

    render() {
        return (
            <div>
                <h4>Quantity: {this.state.qty}</h4>
                <button onClick={this.incrementHandler}>Increment</button>
                <button onClick={this.decrementHandler}>Decrement</button>

            </div>
        )
    }
}
export default Counter