import React from "react";

function Product(props) {
  return (
    <div className="row">
      <div className="col-6">
        <h2>
          {props.product.name}
          <span className="badge bg-secondary">₹{props.product.price}</span>
        </h2>
      </div>
      <div className="col-4">
        <div
          className="btn-group"
          role="group"
          aria-label="Basic mixed styles example"
        >
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => {
              props.decrementQuantity(props.index);
            }}
          >
            -
          </button>

          <button type="button" className="btn btn-warning">
            {props.product.quantity}
          </button>

          <button
            type="button"
            className="btn btn-success"
            onClick={() => {
              props.incrementQuantity(props.index);
            }}
          >
            +
          </button>
        </div>
      </div>
      <div className="col-3">
        {props.product.quantity * props.product.price}
      </div>
    </div>
  );
}
export default Product;
