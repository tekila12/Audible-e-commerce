import './App.css';
import React, { useEffect } from 'react'
import { Switch, Route } from "react-router-dom";
import Header from './components/HeaderComponent/Header';
import Home from './components/Home/Home';
import Book from './components/Home/Book';
import BookAnimation from './BookAnimation';
import Cart from './components/Cart/Cart';
import Register from './components/Signin/Register';
import ResetPassword from './components/Signin/ResetPassword';
import ForgotPassword from './components/Signin/ForgotPassword';
import Login from './components/Signin/Login';
import Books from './components/Home/Books';
import StripeContainer from './components/Cart/StripeContainer';






 
function App() {

  const [loading, setLoading]= React.useState(true)

  useEffect(()=>{
    setTimeout(() => {  
      setLoading(false)
    }, 3000);
    
  },[])
  return (
    <React.Fragment>
      {!loading ?(      
        <Switch>
        <Route exact path='/'>
         <Header />
         <Home />      
        </Route> 
        <Route path="/cart">
          <Header />
          <Cart /> 
        </Route> 
        <Route path="/stripecontainer">
           <Header />
          <StripeContainer /> 
        </Route>    
        <Route path='/book/:bookId'>
         <Header />
         <Book />      
        </Route> 
        <Route path='books'>
          <Books/>
        </Route>
        <Route path='/forgotpassword'>
       <ForgotPassword />
        </Route> 
        <Route path='/passwordreset/:resetToken'>
        <ResetPassword />
        </Route>       
       <Route exact path='/register'>
        <Register />
        </Route> 
        <Route path='/login'>
         <Login />
        </Route>  
        </Switch>
      
       ):(
       <>
      <BookAnimation />
      </>
      )}
    </React.Fragment>
  );
}

export default App