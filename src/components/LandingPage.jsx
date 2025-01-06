import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FaSun, FaMoon } from 'react-icons/fa';
import { ThemeContext } from '../ThemeContext'; // Import the ThemeContext

const LandingPage = () => {
  const { theme, toggleTheme } = useContext(ThemeContext); // Get theme and toggleTheme function from context

  return (
    <div className={`login-container ${theme}`}>
      {/* Updated Header Style */}
      <h2 className="form-title">Welcome to KPLR</h2>

      {/* Theme Toggle */}
      <div className="theme-toggle" onClick={toggleTheme}>
        {theme === 'dark' ? <FaSun size={24} color="#FFD700" /> : <FaMoon size={24} color="#5F41E4" />}
      </div>

    
      <div className="button-container">
        <Link to="/login">
          <button className="login-button">Log In</button>
        </Link>
        <Link to="/register">
          <button className="login-button">Register</button>
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
