import React, { useState } from 'react';
import { CgClose } from "react-icons/cg";
import { Link } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import '../css/signup.css'

const Signup = ({ onClose }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  return (
    <div className='soverlay'>
      <div className='smodal'>
        <div className='sclose-icon' onClick={onClose}>
          <CgClose />
        </div>
        <section id='signup'>
          <div className='scontainer'>
            <div className='signup-box'>
              <form className='signup-form'>
                <h1>✨Create Student Free Account✨</h1>
                <div className='sinput-group'>
                  <div className='sinput-wrapper'>
                    <input
                      type='text'
                      placeholder='Name'
                      name='name'
                      className='sinput-field' />
                  </div>
                </div>
                <div className='sinput-group'>
                  <div className='sinput-wrapper'>
                    <input
                      type='email'
                      placeholder='Email'
                      name='email'
                      className='sinput-field' />
                  </div>
                </div>
                <div className='sinput-group'>
                  <div className='sinput-wrapper'>
                    <input
                      type='text'
                      placeholder='Phone Number'
                      name='phone'
                      className='sinput-field' />
                  </div>
                </div>
                <div className='sinput-group'>
                  <div className='sinput-wrapper'>
                    <input
                      type={showPassword ? 'text' : 'password'}
                      placeholder='Password'
                      name='password'
                      className='sinput-field' />
                    <div className='stoggle-password' onClick={() => setShowPassword(prev => !prev)}>
                      {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </div>
                  </div>
                </div>
                <div className='sinput-group'>
                  <div className='sinput-wrapper'>
                    <input
                      type={showConfirmPassword ? 'text' : 'password'}
                      placeholder='Confirm Password'
                      name='confirmPassword'
                      className='sinput-field' />
                    <div className='stoggle-password' onClick={() => setShowConfirmPassword(prev => !prev)}>
                      {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                    </div>
                  </div>
                </div>
                <div className='input-group rememberMe'>
                  <input
                    type='checkbox'
                    id='rememberMe'
                    checked={rememberMe}
                    onChange={() => setRememberMe(prev => !prev)}
                  />
                  <label htmlFor='rememberMe'>I agree to the Terms and Conditions</label>
                </div>
                <button className='register-button'>Register</button>
                <p className='login-link'>
                  Already have an account? <Link to="/login" className='login-link-highlight'>Login</Link>
                </p>
              </form>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Signup;
