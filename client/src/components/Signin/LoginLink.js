import React from "react";
import { Link} from "react-router-dom";
import { CartContext } from "../../context/cart";
import { UserContext } from "../../context/user";
export default function LoginLink() {
  const { user, logoutHandler, } = React.useContext(UserContext);
  const { clearCart } = React.useContext(CartContext);


  if (user.token) {
    return (
      <>
      <button
        onClick={() => {
          logoutHandler();
          clearCart()
        }}
        className="login__btn"
        >
        Logout
      </button>
      
     </>
    );
  }
  return <Link to="/login" className='sign__in'>Sign In</Link>;
}