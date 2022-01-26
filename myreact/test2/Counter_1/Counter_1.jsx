import React, { Component } from "react";
class Counter_1 extends Component {
    state = {
        product_Name: "APPLE iPhone 12 Mini (Purple, 256 GB)",
        price: 65000,
        image: "https://rukminim1.flixcart.com/image/832/832/ko0d6kw0/mobile/d/h/5/iphone-12-mini-mjqh3hn-a-apple-original-imag2k2xuuyfyusd.jpeg?q=70",
        Qty: 1
    };
    incrHandler = () => {
        this.setState({ Qty: this.state.Qty + 1 })
    };
    decrHandler = () => {
        this.setState({ Qty: this.state.Qty - 1 })
    };
    render() {
        return (
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-10">
                        <div className="table table-hover">
                            <thead className="bg-secondary">
                                <th>Product Name</th>
                                <th>Price</th>
                                <th>Image</th>
                                <th>Qty</th>
                                <th>Total Price</th>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{this.state.product_Name}</td>
                                    <td><img src={this.state.image} alt="" height='75px' width='75px' /></td>
                                    <td>{this.state.price}</td>
                                    <td><i class="fa fa-minus-circle" onClick={this.decrHandler}></i>
                                        {this.state.Qty}
                                        <i class="fa fa-plus-circle" onClick={this.incrHandler}></i>
                                    </td>
                                    <td>{this.state.price * this.state.Qty}</td>
                                </tr>
                            </tbody>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Counter_1;