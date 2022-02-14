import React, { useState } from "react";

let Product = () => {
    let [product, setProduct] = useState({
        name: "Iphone 13 Pro",
        price: 150000,
        qty: 1,
        image: "https://rukminim1.flixcart.com/image/312/312/ktketu80/mobile/e/l/i/iphone-13-pro-mlw03hn-a-apple-original-imag6vpb2kj4dcp5.jpeg?q=70"

    })
    let incrHandler = () => {
        setProduct({ ...product, qty: product.qty + 1 })
    }
    let decrHandler = () => {
        setProduct({ ...product, qty: product.qty - 1 })
    }
    return <React.Fragment>
        <div className="container">
            <div className="row">
                <div className="col-md-8">
                    <table className="text-white table bg-info">
                        <thead>
                            <th>Product Name</th>
                            <th>Product Price</th>
                            <th>Qty</th>
                            <th>Image</th>
                            <th>Total Price</th>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{product.name}</td>
                                <td><img src={product.image} alt="" height="100px" width="100px" /></td>
                                <td>{product.price}</td>
                                <td><i class="fa fa-plus-circle" onClick={incrHandler}></i>
                                    {product.qty}
                                    <i class="fa fa-minus-circle" onClick={decrHandler}></i></td>
                                <td>{product.price * product.qty}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </React.Fragment>
}
export default Product;