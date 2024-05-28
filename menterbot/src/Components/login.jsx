import React, { useState } from 'react';
import { CgClose } from "react-icons/cg";
import { Link } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import '../css/login.css';
import Home from './Home';
import Signup from './signup';

const Login = ({ onClose }) => {
  const [openSignUpPage, setOpenSignUpPage] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  return (
    <div className='overlay'>
      <div className='modal'>
        <div className='close-icon' onClick={onClose}>
          <CgClose />
        </div>
        <section id='login'>
          <div className='container'>
            <div className='login-box'>
              <form className='login-form' onSubmit={handleSubmit}>
                <h1>✨Login✨</h1>
                <div className='input-group'>
                  <div className='input-wrapper'>
                    <input
                      type='email'
                      placeholder='Username or email'
                      name='email'
                      className='input-field' />
                  </div>
                </div>
                <div className='input-group'>
                  <div className='input-wrapper'>
                    <input
                      type={showPassword ? "text" : "password"}
                      placeholder='Password'
                      name='password'
                      className='input-field' />
                    <div className='toggle-password' onClick={() => setShowPassword(prev => !prev)}>
                      {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </div>
                  </div>
                  <div className='input-group remember-me'>
                    <div>
                      <input
                        type='checkbox'
                        id='rememberMe'
                        checked={rememberMe}
                        onChange={() => setRememberMe(prev => !prev)}
                      />
                      <label htmlFor='rememberMe'>Remember Me</label>
                    </div>
                    <Link to='/forgot-password' className='forgot-password-link'>
                      Forgot your password ?
                    </Link>
                  </div>
                  <button className='submit-button'>Login</button>
                  <p className='signup-link'>
                    Don't have an account? <Link to="/signup" className='signup-link-highlight'>Register Now</Link>
                    {/* Don't have an account ? <button className='signup-link-highlight' onClick={() => setOpenSignUpPage(true)}>Register Now</button> */}
                  </p>
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Login;
