import './App.css';
import React, { lazy, Suspense, useEffect } from 'react'
import { Switch, Route } from "react-router-dom";
import Header from './components/HeaderComponent/Header';
import Home from './components/Home/Home';
import Book from './components/Home/Book';
import BookAnimation from './BookAnimation';
import ResetPassword from './components/Signin/ResetPassword';
import ForgotPassword from './components/Signin/ForgotPassword';

import StripeContainer from './components/Cart/StripeContainer';
import DevBook from './DevBook';


  const Register = lazy (()=> import ('./components/Signin/Register'))
  const Cart = lazy (()=>('./components/Cart/Cart'))
  const Books = lazy (()=> ('./components/Home/Books'))


  const Login = lazy(() => {
    return Promise.all([
      import("./components/Signin/Login"),
      new Promise(resolve => setTimeout(resolve, 800000))
    ])
    .then(([moduleExports]) => moduleExports);
  });


 
const App=()=> {

  const [loading, setLoading]= React.useState(true)

  useEffect(()=>{
    setTimeout(() => {  
      setLoading(false)
    }, 3000);
    
  },[])
  return (
    <React.Fragment>
      {!loading ?(   
        <Suspense fallback={<DevBook/>} >   
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
      </Suspense >
       ):(
       <>
      <BookAnimation />
      </>
      )}
    </React.Fragment>
  );
}

export default App