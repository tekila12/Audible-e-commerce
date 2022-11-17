import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const forgotPasswordHandler = async (e) => {
    e.preventDefault();
    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };
    try {
      const { data } = await axios.post(
        "http://localhost:5000/api/auth/forgotpassword",
        { email },
        config
      );
      setSuccess(data.data);
    } catch (error) {
      setError(error.response.data.error);
      setEmail("");
      setTimeout(() => {
        setError("");
      }, 5000);
    }
  };

  return (
    <div className="signin">
      <Link  to='/'>
        <img src='/audible/logo.png' alt='' />
      </Link>  
      <form
        onSubmit={forgotPasswordHandler}
        className="form__container"
        >
        <h3>Password Assistance</h3>
        {error && <span className="error__message">{error}</span>}
        {success && <span className="success__message">{success}</span>}    
          <p className="forgotpassword__text">
          Enter the email address or mobile phone number associated with your Amazon account.
          </p>
          <span  className='labels' htmlFor="email">Email:</span>
          <input
            className="input__field"
            type="email"
            required
            id="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        <button type="submit" className="signin__btn">
          Continue
        </button>
      </form>
    </div>
  );
};

export default ForgotPassword;
