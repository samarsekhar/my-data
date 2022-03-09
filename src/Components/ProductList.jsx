import React from "react";
import Product from "./Product";

function ProductList(props) {
  console.log(props);
  return props.productList.map((product, index) => {
    return (
      <Product
        product={product}
        key={index}
        incrementQuantity={props.incrementQuantity}
        index={index}
        decrementQuantity={props.decrementQuantity}
      />
    );
  });
}
export default ProductList;
