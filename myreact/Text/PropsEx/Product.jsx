import React, { Component } from 'react'
import Cart from './Cart'

class Product extends Component {
    Product_Name = "Iphone 13 pro"
    Product_Price = 89999
    Colors = ['Blue', 'Red', 'Gold']
    render() {
        return (
            <div>
                <h2>Product Component</h2>
                <hr />
                <Cart Name={this.Product_Name}
                    Price={this.Product_Price}
                    Color={this.Colors}
                />
            </div>
        )
    }
}
export default Product