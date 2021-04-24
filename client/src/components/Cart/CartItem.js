import React,{useContext} from "react";
import { CartContext } from "../../context/cart";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

export default function CartItem({ id, image,bookName, regularPrice, by, amount }) {
  const { removeItem, increaseAmount, decreaseAmount } = useContext(
    CartContext
  );
  return (
      <div id={id} className="cart__item">
        <img className='cart__image' src={image} alt='' />
        <div className='cart__itemdesc'>
         <h4>{bookName}</h4>
         <h6 className='cart__by'>By: {by}</h6>
        <button
          className="cart__removebtn"
          onClick={() => {
            removeItem(id);
          }}
         >
          Remove
        </button>
        <div className='amount__button'>
        <button
         className="cart__amountbtn"
          onClick={() => {
          increaseAmount(id);
          }}
        >
          <FaAngleUp />
        </button>
        <p className='amount'>{amount}</p>
        <button
          className="cart__amountbtn"
          onClick={() => {
            decreaseAmount(id, amount);
          }}
        >
          <FaAngleDown />
        </button>
      </div>
        </div>  
        <span className='cart__regular'>  {regularPrice} </span>        
    </div>
  );
}