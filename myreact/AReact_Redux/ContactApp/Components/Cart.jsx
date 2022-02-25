import React, { useState } from "react";

function Cart() {
    let [cart, setCart] = useState({
        product_name: "Redmi Note 5 pro",
        price: 18000,
        qty: 1,
        image: "https://rukminim1.flixcart.com/image/312/312/jdhp47k0/mobile/e/h/e/redmi-note-5-pro-na-original-imaf2ashnnbxxks5.jpeg?q=70"
    });
    return (
        <>
            <div className="container mt-5">
                <h1>Product List</h1>
                <div className="row">
                    <div className="col-md-6">
                        <table className="table table-primary bg-primary">
                            <thead>
                                <tr>
                                    <th>Product Name</th>
                                    <th>Image</th>
                                    <th>Price</th>
                                    <th>Quantity</th>
                                    <th>Total Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{cart.product_name}</td>
                                    <td><img src={cart.image} alt="" height="150px" /></td>
                                    <td>{cart.price}</td>
                                    <td>
                                        <i className="fa fa-minus-circle" onClick={() => { setCart({ ...cart, qty: cart.qty - 1 }) }} />
                                        {cart.qty}
                                        <i className="fa fa-plus-circle" onClick={() => { setCart({ ...cart, qty: cart.qty + 1 }) }} />
                                    </td>
                                    <td>{cart.qty * cart.price}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
};
export default Cart;