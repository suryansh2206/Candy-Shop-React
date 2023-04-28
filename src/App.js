import React from "react";
import { useState } from "react";
import Form from "./components/Form";
import Header from "./components/Header";
import Products from "./components/Products";
import Cart from "./components/Cart";
import CartProvider from "./components/CartProvider";

function App() {
  const [products, setProducts] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  const addProduct = (data) => {
    setProducts((prevProduct) => [...prevProduct, data]);
  };

  const add1ToCart = () => {
    setCartCount((prevCount) => prevCount + 1);
  };

  const add2ToCart = () => {
    setCartCount((prevCount) => prevCount + 2);
  };

  const add3ToCart = () => {
    setCartCount((prevCount) => prevCount + 3);
  };

  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header cartCount={cartCount} onShowCart={showCartHandler} />
      <Form
        addProduct={addProduct}
        add1ToCart={add1ToCart}
        add2ToCart={add2ToCart}
        add3ToCart={add3ToCart}
      />
      <Products
        products={products}
        add1ToCart={add1ToCart}
        add2ToCart={add2ToCart}
        add3ToCart={add3ToCart}
      />
    </CartProvider>
  );
}

export default App;
