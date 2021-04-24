import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useRouteMatch, } from "react-router-dom"



const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const match = useRouteMatch()
  const resetPasswordHandler = async (e) => {
    e.preventDefault();
    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };
    if (password !== confirmPassword) {
      setPassword("");
      setConfirmPassword("");
      setTimeout(() => {
        setError("");
      }, 5000);
      return setError("Passwords don't match");
    }
    try {
      const { data } = await axios.put(
        `/api/auth/resetpassword/${match.params.resetToken}`,
        {
          password,
        },
        config
      );
      console.log(data);
      setSuccess(data.data);
    } catch (error) {
      setError(error.response.data.error);
      setTimeout(() => {
        setError("");
      }, 5000);
    }
  };

  return (
    <div className="signin">  
        <img src='/audible/logo.png' alt ='' />
      <form
        onSubmit={resetPasswordHandler}
        className="form__container"
        >
        <h3 >Create new password</h3>
        <h5 className='reset__info'>We'll ask for this password whenever you Sign-In</h5>
        {error && <span className="error__message">{error} </span>}
        {success && (
          <span className="success__message">
            {success} <Link to="/login">Login</Link>
          </span>
        )}
          <span className="labels" >New Password</span>
          <input
            className="input__field"
            type="password"
            required
            id="password"
            autoComplete="true"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <span className="labels" >Re-enter password</span>
          <input
            className="input__field"
            type="password"
            required
            placeholder="At least 6 characters"
            id="confirmpassword"
            autoComplete="true"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        <button type="submit" className="signin__btn">
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default ResetPassword;
