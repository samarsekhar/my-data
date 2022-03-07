import React, { Component } from "react";
class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {
            product_name: "Iphone 13 pro",
            price: 170000,
            qty: 0,
            image: "https://rukminim1.flixcart.com/image/224/224/kgiaykw0/mobile/r/f/s/apple-iphone-11-mhde3hn-a-original-imafwqepzbrcagw3.jpeg?q=90",

        };
    };
    decrementHandler = () => {
        this.setState({ qty: this.state.qty - 1 });
    };
    incrementHandler = () => {
        this.setState({ qty: this.state.qty + 1 });
    };
    render() {
        return (
            <>
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-md-8">
                            <table className="table table-primary bg-light">
                                <thead>
                                    <tr>
                                        <th>Product Name</th>
                                        <th>Price</th>
                                        <th>Qty</th>
                                        <th>Image</th>
                                        <th>Total Price</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>{this.state.product_name}</td>
                                        <td>{this.state.price}</td>
                                        <td>
                                            <i className="fa fa-minus-circle"
                                                onClick={this.decrementHandler} />
                                            {this.state.qty}
                                            <i className="fa fa-plus-circle"
                                                onClick={this.incrementHandler} />
                                        </td>
                                        <td>
                                            <img src={this.state.image} alt="Iphone" />
                                        </td>
                                        <td>{this.state.price * this.state.qty}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </>
        );
    };
};
export default Product;