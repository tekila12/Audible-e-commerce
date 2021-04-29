import './App.css';
import React, { Suspense,} from 'react'
import { Switch, Route } from "react-router-dom";
import Header from './components/HeaderComponent/Header';
import Home from "./components/Home/Home"
import Books from "./components/Home/Books"





 
const Register= React.lazy(
  () =>
    new Promise((resolve, reject) =>
      setTimeout(() => resolve(import("./components/Signin/Register")), 300)
    )
);


  const StripeContainer= React.lazy(
    () =>
      new Promise((resolve, reject) =>
        setTimeout(() => resolve(import("./components/Cart/StripeContainer")), 700)
      )
  );


  const Cart = React.lazy(
    () =>
      new Promise((resolve, reject) =>
        setTimeout(() => resolve(import("./components/Cart/Cart")), 700)
      )
  );

  const Login = React.lazy(
    () =>
      new Promise((resolve, reject) =>
        setTimeout(() => resolve(import("./components/Signin/Login")), 700)
      )
  );

  const Book = React.lazy(
    () =>
      new Promise((resolve, reject) =>
        setTimeout(() => resolve(import("./components/Home/Book")), 700)
      )
  );

  const ResetPassword = React.lazy(
    () =>
      new Promise((resolve, reject) =>
        setTimeout(() => resolve(import("./components/Signin/ResetPassword")), 300)
      )
  );

  const ForgotPassword = React.lazy(
    () =>
      new Promise((resolve, reject) =>
        setTimeout(() => resolve(import("./components/Signin/ForgotPassword")), 300)
      )
  );


 
 
const App=()=> {

  
  return (
    <React.Fragment>
        <Switch>
        <Route exact path='/'>
         <Header />
         <Home />      
        </Route> 
        <Suspense fallback={  <div  className="login__loader">
          <img src='./audible/Glowing ring.gif' alt= ''></img>            
          </div>  }>    
        <Route exact path='/register'>
        <Register />
        </Route>    
        <Route path='/login'>
         <Login />
        </Route>
        <Route path="/stripecontainer">
          <Header />
          <StripeContainer /> 
        </Route>  
        <Route path="/cart">
          <Header />
          <Cart /> 
        </Route>   
         <Route path='/book/:bookId'>
         <Header />
         <Book />      
        </Route>     
        <Route path='/forgotpassword'>
       <ForgotPassword />
        </Route> 
        <Route path='/passwordreset/:resetToken'>
        <ResetPassword />
        </Route>       
        </Suspense>
        <Route path='books'>
          <Books/>
        </Route>  
    
        </Switch>
    
   
    
    </React.Fragment>
  );
}

export default App