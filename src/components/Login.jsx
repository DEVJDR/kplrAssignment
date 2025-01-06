import React, { useState, useContext } from 'react';
import axios from 'axios'; // Ensure axios is imported
import InputField from './InputField';
import { useNavigate,Link } from 'react-router-dom'; // Import useNavigate
import { ThemeContext } from '../ThemeContext'; // Import the theme context

const Login = () => {
  const { theme } = useContext(ThemeContext); // Get the current theme
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate(); // Initialize navigate
  
  const handleLogin = async (e) => {
    e.preventDefault();
  
    try {
      const response = await axios.post('https://staging.kplr.in/Onboarding/UserLogin', {
        username,
        password,
      });
  
      if (response.status === 200) {
        // Save a flag or token in local storage
        localStorage.setItem('isLoggedIn', 'true');
  
        setMessage('User Successfully logged in');
        setTimeout(() => {
          navigate('/dashboard'); // Redirect to dashboard
        }, 1000);
      }
    } catch (error) {
      setMessage('Login failed. Try again.');
    }
  };

  return (
    <div className={`login-container ${theme}`}> {/* Apply theme class here */}
      <form onSubmit={handleLogin} className="login-form">
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
        <button type="submit" className="login-button">Login</button>
      </form>

      <p>{message}</p>

      <p className="signup-prompt">
        Don't have an account? <Link to="/register" className="signup-link">Register</Link>
      </p>
    </div>
  );
}

export default Login;
