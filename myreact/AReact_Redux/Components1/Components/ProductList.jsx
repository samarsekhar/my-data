import React from "react";
import Product from "./Product";

function ProductList(props) {
  console.log(props);
  return props.productList.length > 0 ? (
    props.productList.map((product, index) => {
      return (
        <Product
          product={product}
          key={index}
          incrementQuantity={props.incrementQuantity}
          index={index}
          decrementQuantity={props.decrementQuantity}
          removeItem={props.removeItem}
        />
      );
    })
  ) : (
    <h1>No Product Exists in the Carts</h1>
  );
}
export default ProductList;
