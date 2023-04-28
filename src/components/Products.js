import React from "react";

const Products = ({ products, add1ToCart, add2ToCart, add3ToCart }) => {
  const add1ToCartHandler = () => {
    add1ToCart();
  }
  const add2ToCartHandler = () => {
    add2ToCart();
  };
  const add3ToCartHandler = () => {
    add3ToCart();
  }

  return (
    <>
      <div className="products">
        <h1>Available Candies</h1>
        {products.map((product, index) => (
          <div key={index}>
            <h3>
              Name- {product.inputName} {''} 
              Description- {product.inputDescription} {''} Price- {product.inputPrice}
              <button onClick={() => add1ToCartHandler(product)}>
                Add 1
              </button>
              <button onClick={() => add2ToCartHandler(product)}>
                Add 2
              </button>
              <button onClick={() => add3ToCartHandler(product)}>
                Add 3
              </button>
            </h3>
          </div>
        ))}
      </div>
    </>
  );
};

export default Products;
