import React, { useState } from "react";

let Product = () => {
    let [product, setProduct] = useState({
        name: "Iphone 13",
        price: 120000,
        qty: 1,
    })
    let incrHandler = () => {
        setProduct({ ...product, qty: product.qty + 1 })
    }
    let decrHandler = () => {
        setProduct({ ...product, qty: product.qty - 1 })
    }
    return <React.Fragment>
        <h1>Product Name: {product.name}</h1>
        <h2>Product Price:{product.price}</h2>
        <h3>Total Price:{product.price * product.qty}</h3>

        <button onClick={incrHandler}>INCREMENT</button>
        <span>{product.qty}</span>
        <button onClick={decrHandler}>DECREMENT</button>
    </React.Fragment>
};
export default Product;