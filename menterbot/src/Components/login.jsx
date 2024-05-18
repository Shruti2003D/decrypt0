import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import '../css/login.css';
import Footer from "./Footer";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  return (
    <>
    <section id='login'>
      <div className='container'>
        <div className='login-box'>
          <form className='login-form'>
            <h1>✨Login✨</h1>
            <div className='input-group'>
              <label>Email </label>
              <div className='input-wrapper'>
                <input
                  type='email'
                  placeholder=''
                  name='email'
                  className='input-field' />
              </div>
            </div>
            <div className='input-group'>
              <label>Password </label>
              <div className='input-wrapper'>
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder=''
                  name='password'
                  className='input-field' />
                <div className='toggle-password' onClick={() => setShowPassword(prev => !prev)}>
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </div>
              </div>
              <div className='input-group remember-me'>
                <label htmlFor='rememberMe'>Remember me</label>
                <input
                  type='checkbox'
                  id='rememberMe'
                  checked={rememberMe}
                  onChange={() => setRememberMe(prev => !prev)}
                />
              </div>
              <p className='signup-link'>
                Don't have an account? <Link to="/signup" className='signup-link-highlight'>Register</Link>
                <button className='login'>Log in</button>
              </p>
              

              <Link to='/forgot-password' className='forgot-password-link'>
                Forgot your password ?
              </Link>
            </div>
          </form>

        </div>
      </div>
    </section>
    <br/>
    <br/>
    <Footer />
    </>
  );
};

export default Login;
