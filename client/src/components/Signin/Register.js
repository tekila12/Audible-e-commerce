import { useEffect, useContext, useState, } from "react";
import axios from "axios";
import { Link, useHistory  } from "react-router-dom";
import { UserContext } from "../../context/user";


const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const {user, setUser } = useContext(UserContext);
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false)
  const history = useHistory()
  const registerHandler = async (e) => {
    e.preventDefault();
  
    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };

    if (password !== confirmpassword) {
      setPassword("");
      setConfirmPassword("");
      setTimeout(() => {
        setError("");
      }, 5000);
      return setError("Passwords do not match");
    }

    try {
      const { data } = await axios.post(
        "http://localhost:5000/api/auth/register",
        {
          username,
          email,
          password,
        },       
        config
       
      );    
      user.token = data.token;
      console.log(data)
      localStorage.setItem('user',JSON.stringify(user))
      setUser(user)
      setSuccess(true)
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
    setTimeout(()=>{
      if(success){
        history.push('/')
      }
    },3000)
  },[success, history])


  return (
    <div className="signin">
      <Link to='/'>
        <img src='/audible/logo.png' alt= '' />
      </Link>  
      <form onSubmit={registerHandler} className="form__container">
        <h3>Create account</h3>
        {error && <span className="error__message">{error}</span>}
          <span  className='labels'>Username</span>
          <input
            type="text"
            className="input__field"
            required
            id="name"          
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <span  className='labels'>Email</span>
          <input
            type="email"
            className="input__field"
            required
            id="email"  
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          /> 
          <span  className='labels'>Password</span>
          <input
            type="password"
            required
            id="password"
            className="input__field"
            autoComplete="true"
            placeholder="At least 6 characters"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <span  className='labels'>Re-enter password</span>
          <input
            type="password"
            required
            id="confirmpassword"
            className="input__field"
            autoComplete="true"
            value={confirmpassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />   
        <button type="submit"  className="register__btn">
          Create your Amazon account
        </button>
        <span >
          Already have an account? <Link className='links' to="/login">Login</Link>
        </span>
      </form>
      {success && (
        <div className='login__loader'>
          <img src='./audible/Glowing ring.gif' alt= ''></img>
          <h4>Your account has been created </h4>
          </div>
      )}
    </div>
  );
};

export default Register;
