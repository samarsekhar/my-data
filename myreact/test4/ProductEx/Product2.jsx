import React from "react";
import Cart2 from "./Cart2"
class Product2 extends React.Component {
    product_name = "Iphone 13 pro"
    product_price = 165000
    colors = ["Blue, Black, Gold"]
    rating = 4.5
    user = "10m"

    render() {
        return <div>
            <h1>Product Component</h1>
            <hr />
            <Cart2 name={this.product_name}
                price={this.product_price}
                colors={this.colors}
                rating={this.rating}
                user={this.user}
            />
        </div>
    }
}
export default Product2;