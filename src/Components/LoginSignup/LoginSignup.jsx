import React, { useState } from 'react';
import './LoginSignup.css';

import user_icon from '../Assets/person.png';
import email_icon from '../Assets/email.png';
import password_icon from '../Assets/password.png';

const LoginSignup = () => {
  const [action, setAction] = useState('Login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('');

  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    return emailRegex.test(email);
  };

  const validateName = (name) => {
    const nameRegex = /^[A-Za-z\s]+$/;
    return nameRegex.test(name);
  };

  const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
    return passwordRegex.test(password);
  };

  const handleLogin = () => {
    if (!validateEmail(email)) {
      setMessage('Please enter a valid @gmail.com email.');
      setMessageType('error');
      return;
    }

    if (!validatePassword(password)) {
      setMessage('Password must be at least 8 characters long and include a special character.');
      setMessageType('error');
      return;
    }

    if (email === 'test@example.com' && password === 'password') {
      setMessage('Login successfully!');
      setMessageType('success');
    } else {
      setMessage('User not registered! Redirecting to sign up...');
      setMessageType('error');
      setTimeout(() => setAction('Sign Up'), 2000);
    }
  };

  const handleSignup = () => {
    if (!validateName(name)) {
      setMessage('Name should not contain any digits.');
      setMessageType('error');
      return;
    }

    if (!validateEmail(email)) {
      setMessage('Please enter a valid @gmail.com email.');
      setMessageType('error');
      return;
    }

    if (!validatePassword(password)) {
      setMessage('Password must be at least 8 characters long and include a special character.');
      setMessageType('error');
      return;
    }

    setMessage('Sign up successful!');
    setMessageType('success');
  };

  const handleSubmit = () => {
    if (action === 'Login') {
      if (email && password) {
        handleLogin();
      } else {
        setMessage('Please fill in all fields.');
        setMessageType('error');
      }
    } else {
      if (name && email && password) {
        handleSignup();
      } else {
        setMessage('Please fill in all fields.');
        setMessageType('error');
      }
    }
  };

  return (
    <div className='container'>
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>

      <div className="inputs">
        {action === 'Sign Up' && (
          <div className="input">
            <img src={user_icon} alt="user" />
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
        )}

        <div className="input">
          <img src={email_icon} alt="email" />
          <input
            type="email"
            placeholder="Email ID"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="input">
          <img src={password_icon} alt="password" />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
      </div>

      {action === 'Login' && (
        <div className="forgot-password">
          Lost Password? <span>Click Here!</span>
        </div>
      )}

      {message && <div className={`message ${messageType}`}>{message}</div>}

      <div className="submit-container">
        <div
          className={action === 'Sign Up' ? 'submit active' : 'submit inactive'}
          onClick={() => setAction('Sign Up')}
        >
          Sign Up
        </div>
        <div
          className={action === 'Login' ? 'submit active' : 'submit inactive'}
          onClick={() => setAction('Login')}
        >
          Login
        </div>
      </div>

      <div className="submit-action" onClick={handleSubmit}>
        {action === 'Login' ? 'Login' : 'Sign Up'}
      </div>
    </div>
  );
};

export default LoginSignup;
