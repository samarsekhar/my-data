import React, { Component } from 'react';
class Cart extends Component {
    render() {
        return (
            <div>
                <h4>Cart Component</h4>
                <pre>{JSON.stringify(this.props)}</pre>
                <h4>Product Name:{this.props.Name}</h4>
                <h4>Product Price:{this.props.Price}</h4>
                <h4>Product Color:{this.props.Color[0]}</h4>
            </div>
        )
    }
}
export default Cart