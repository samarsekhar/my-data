import React, { Component } from "react";
class Cart2 extends Component {
    render() {
        return (
            <div>
                <h2>Cart Component</h2>
                <pre>{JSON.stringify(this.props)}</pre>
                <h3>Product Name:{this.props.name}</h3>
                <h3>Product Price:{this.props.price}</h3>
                <h3>Colors:{this.props.colors}</h3>
                <h3>Rating:{this.props.rating}</h3>
                <h3>user:{this.props.user}</h3>
            </div>
        )
    }
}
export default Cart2;