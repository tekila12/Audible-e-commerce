import './App.css';
import React, { Suspense,} from 'react'
import { Switch, Route } from "react-router-dom";
import Header from './components/HeaderComponent/Header';
import Home from "./components/Home/Home"
import BookAnimation from './components/Home/BookAnimation';






 
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

  const Books= React.lazy(
    () =>
      new Promise((resolve, reject) =>
        setTimeout(() => resolve(import("./components/Home/Books")), 700)
      )
  );
 
 
const App=()=> {
  const [loading, setLoading]= React.useState(true)

  React.useEffect(()=>{
    setTimeout(()=>{
      setLoading(false)
    },3000)
  })
  
  return (
   
    <React.Fragment>
      {!loading ? ( 
       <Suspense fallback={  <div  className="login__loader">
          <img src='./audible/Glowing ring.gif' alt= ''></img>            
          </div>  }>            
        <Switch>
         
        <Route exact path='/'>
         <Header />
         <Home />      
        </Route> 
       
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
        <Route path='books'>
          <Books/>
        </Route>  
    
        </Switch>
    
       </Suspense> 
           ):(
         <BookAnimation />
       )}
    </React.Fragment>
  );
}

export default App