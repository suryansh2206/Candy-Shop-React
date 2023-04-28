import React, { useContext} from "react";
import "./styles.css";
import CartContext from "./CartContext";

const Header = (props) => {
  const cartCtx = useContext(CartContext)

  return (
    <>
      <div className="header">
        <h1>Candy Shop</h1>
        <div className="headercart">
          <button onClick={props.onShowCart}>Cart {props.cartCount}</button>
        </div>
      </div>
    </>
  );
};

export default Header;
