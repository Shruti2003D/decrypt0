import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import '../css/signup.css';
import Footer from "./Footer";

const Signup = () => {
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  
  return (
    <>
    <section id='login'>
      <div className='container'>
        <div className='login-box'>
          <form className='login-form'>
            <h1>✨Create Student Free Account✨</h1>
            <div className='input-group'>
              <label>Name </label>
              <div className='input-wrapper'>
                <input
                  type='text'
                  placeholder=''
                  name='name'
                  className='input-field' />
              </div>
            </div>
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
              <label>Phone Number </label>
              <div className='input-wrapper'>
                <input
                  type='text'
                  placeholder=''
                  name='phone'
                  className='input-field' />
              </div>
            </div>
            <div className='input-group'>
              <label>Password </label>
              <div className='input-wrapper'>
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder=''
                  name='password'
                  className='input-field' />
                <div className='toggle-password' onClick={() => setShowPassword(prev => !prev)}>
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </div>
              </div>
            </div>
            <div className='input-group'>
              <label>Confirm Password </label>
              <div className='input-wrapper'>
                <input
                  type={showConfirmPassword ? 'text' : 'password'}
                  placeholder=''
                  name='confirmPassword'
                  className='input-field' />
                <div className='toggle-password' onClick={() => setShowConfirmPassword(prev => !prev)}>
                  {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                </div>
              </div>
            </div>
            <div className='input-group remember-me'>
              <label htmlFor='rememberMe'>I agree to the Terms and Conditions</label>
              <input
                type='checkbox'
                id='rememberMe'
                checked={rememberMe}
                onChange={() => setRememberMe(prev => !prev)}
              />
            </div>
            <p className='signup-link'>
              Already have an account? <Link to="/login" className='signup-link-highlight'>Login</Link>
              <button className='login'>Register</button>
            </p>
          </form>
        </div>
      </div>
    </section>
    <Footer />
    </>
  );
};

export default Signup;
