import React from 'react';
import { Link,  } from "react-router-dom";
import Search from './Search';
import LoginLink from '../Signin/LoginLink';
import CartLink from '../Cart/CartLink';
import { UserContext } from '../../context/user';
import './Header.css'
const Header = () => {
const { user } = React.useContext(UserContext);

    return (
        <div className='header__container'>
            <Link to='/'>
            <img src='/audible/logo.png' alt=''/>
            </Link>                      
            <LoginLink />  
            {user.token && (
              <CartLink /> 
            )}
            <Search />                        
        </div>
    )
}

export default Header
