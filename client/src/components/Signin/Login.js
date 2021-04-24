import React, { useEffect, useState, } from "react";
import { Link, useHistory } from "react-router-dom"
import axios from "axios";
import "./Signin.css";
import { UserContext } from "../../context/user";


const Login = () => {
  const {user, setUser } = React.useContext(UserContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccees] = useState(false)
  const history = useHistory()
  

  const loginHandler = async (e) => {
    e.preventDefault();
    
    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };
    try {
      const { data } = await axios.post(
        "/api/auth/login",
        { email, password },
        config
      );
      user.token = data.token;
      localStorage.setItem('user',JSON.stringify(user))
      setUser(user)
      setSuccees(true)
    } catch (error) {
      if (error.response) {
        setError(error.response.data.error);
      }
      setTimeout(() => {
         setError("");
      }, 5000);
  }  
  };

  useEffect(()=>{
    setTimeout(() => {
    if(success){
      history.push('/')
     }  
 }, 3000);
  },[success, history])
  
 
  return (
    <div className="signin">
          <Link to='/'>
            <img src='/audible/logo.png'
            alt='' />
          </Link>  
          {success &&(   
             <div success={success} className="login__loader">
              <img src='./audible/Glowing ring.gif' alt= ''></img>
              <h4>Logging in</h4>
             </div>      
        
        )}  
      <form onSubmit={loginHandler} className="form__container">
        <h3>Sign in with your Amazon account</h3>
        {error && <span className="error__message">{error}</span>}
          <span className='labels'>Email </span>
          <input
           className="input__field"
            type="email"
            required
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            tabIndex={1}
          />
          <span className='signin__forgot'>Password{" "}
            <Link className='links' to="/forgotpassword" >
              Forgot Password?
            </Link>
         </span> 
          <input
            className="input__field"
            type="password"
            required
            id="password"
            autoComplete="true"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            tabIndex={2}
          />
        <button type="submit" className="signin__btn">
          Sign In
        </button>
         <span className='new__sign'>New to Amazon? </span>
         <Link to="/register"> 
          <button className='signin__register'>
          Create your amazon account
          </button>
        </Link>
      
        
      </form>
     
    </div>
  );
};

export default Login;
