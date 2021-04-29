import React,{useContext} from "react";
import EmptyCart from "./EmptyCart";
import CartItem from './CartItem'
import { CartContext } from "../../context/cart";
import {useHistory } from 'react-router-dom'



export default function Cart() {
const history = useHistory()
const {total} = useContext(CartContext)
  const { cart, cartItems } = React.useContext(CartContext);

  if (cart.length === 0) {
    return <EmptyCart />;
  }


  return (
    <div className="cart__items"> 
        <div className='checkout__top'>
      <h2 className='payment__checkout'>1. Cart</h2>
      <h2 className='payment__cart'>2. Checkout</h2>
      </div>
      <div className='cart__checkout'>
      <div className='cart__itemnu'> 
        <div><span>Item({cartItems})</span></div>
        <div><span className='span__price'>Price</span></div>
      </div>    
       <div className='checkout__summary'>
            <h3>Summary</h3>
            <h4>Subtotal : ${total}</h4>
            <button onClick={()=>{history.push('/stripecontainer')} } className='checkout__btnOne'>Proceed to Checkout</button>            
        </div>  
      </div>     
       {cart.map(item => {
        return <CartItem id={item.key} {...item} />;
         })}   
            <div className='checkout__summaryTrick'>
            <h3>Summary</h3>
            <h4>Subtotal : ${total}</h4>
            <button onClick={()=>{history.push('/stripecontainer')} } className='checkout__btnOne'>Proceed to Checkout</button>            
        </div>  
    </div>
  );
}