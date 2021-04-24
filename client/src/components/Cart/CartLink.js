import React from "react";
import { Link } from "react-router-dom";
import {FiShoppingCart} from 'react-icons/fi'
import { CartContext } from "../../context/cart";
export default function CartLink() {

  const { cartItems} = React.useContext(CartContext);
  return (
    <div className="cartlink__container">
      <Link className='cartLink'to="/cart">
      <FiShoppingCart />
      </Link>
      <span className="cartlink__total">{cartItems}</span>
    </div>
  );
}

