import React, { useState, useContext } from 'react';
import axios from 'axios';
import InputField from './InputField';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { ThemeContext } from '../ThemeContext'; // Import ThemeContext
import { FaSun, FaMoon } from 'react-icons/fa'; // Import the theme icons

const Login = () => {
  const { theme, toggleTheme } = useContext(ThemeContext); // Get the current theme and toggle function
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
        // Store login status and username in localStorage (optional)
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('username', username); // Optional: Save username

        setMessage('User Successfully logged in');
        setTimeout(() => {
          // Navigate to dashboard with state
          navigate('/dashboard', { state: { username } });
        }, 1000);
      }
    } catch (error) {
      setMessage('Login failed. Try again.');
    }
  };

  return (
    <>
      {/* Theme toggle icon */}
      <div className="theme-toggle" onClick={toggleTheme}>
        {theme === 'dark' ? <FaSun size={30} color="#FFD700" /> : <FaMoon size={30} color="#5F41E4" />}
      </div>

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
          Don't have an account? <a href="/register" className="signup-link">Register</a>
        </p>
      </div>
    </>
  );
}

export default Login;
