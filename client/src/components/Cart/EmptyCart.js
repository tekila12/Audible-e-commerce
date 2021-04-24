import React from "react";
import { Link } from "react-router-dom";
export default function EmptyCart() {
  return (
    <div className="empty__cart">
      <h2>Cart</h2>
      <div className='cart__itemnum'>
        <div><span>Item</span></div>
        <div><span>Price</span></div>
      </div>
      <img className='empty__cartpic' src='./audible/cart.png' alt ='' />
      <h2>Looks like you don't have any items in your cart. </h2>
      <p>When you have added books to the cart you will see them here,
         you can add books to your by clicking the button below.</p>
      <Link to="/" >
        <button className='empty__btn'>
         Start shopping
        </button>  
      </Link>
       <div>
      
       </div>
     
    </div>
  );
}