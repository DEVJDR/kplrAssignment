import React, { useState } from 'react';
import axios from 'axios';
import InputField from './InputField';
import { useNavigate,Link } from 'react-router-dom'; 

const UserCreation = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  
  const navigate = useNavigate(); 

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('https://staging.kplr.in/Onboarding/CreateUserId', {
        username,
        password,
      });

      if (response.status === 200) {
        setMessage('User registered successfully!');
        setTimeout(() => {
          navigate('/login');
        }, 1000); // 1 second delay
      }
    } catch (error) {
      setMessage('Registration failed. Try again.');
    }
  };

  return (
    <div className="login-container">
      
      <form onSubmit={handleRegister} className="login-form">
        <InputField
          type="text"  
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          icon="person"
          required
        />
        <InputField
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          icon="lock"
          required
        />
        <button type="submit" className="login-button">Register</button>
      </form>

      <p>{message}</p>

      <p className="signup-prompt">
        Already have an account? <Link to="/login" className="signup-link">Log In</Link>
      </p>
    </div>
  );
}

export default UserCreation;
