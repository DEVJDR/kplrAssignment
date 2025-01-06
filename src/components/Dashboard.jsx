import React, { useState, useEffect, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { ThemeContext } from '../ThemeContext';
import { FaTasks, FaCalendarAlt, FaProjectDiagram, FaSun, FaMoon } from 'react-icons/fa';

const Dashboard = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const location = useLocation();
  console.log(location);
const username=location.state?.username
  const [totalProjects, setTotalProjects] = useState(0);
  const [completedTasks, setCompletedTasks] = useState(0);
  const [upcomingDeadlines, setUpcomingDeadlines] = useState(0);

  useEffect(() => {
    const incrementValue = (target, setValue) => {
      let count = 0;
      const interval = setInterval(() => {
        if (count < target) {
          count++;
          setValue(count);
        } else {
          clearInterval(interval);
        }
      }, 10);
    };

    incrementValue(25, setTotalProjects);
    incrementValue(80, setCompletedTasks);
    incrementValue(10, setUpcomingDeadlines);
  }, []);

  return (
    <>
      <div className="theme-toggle" onClick={toggleTheme}>
        {theme === 'dark' ? <FaSun size={30} color="#FFD700" /> : <FaMoon size={30} color="#5F41E4" />}
      </div>
      <div className="dashboard-content">
          <h1>Welcome to KPLR</h1>
        <p>Your personalized dashboard for managing your tasks, projects, and more.</p>
        <div className="stats-cards">
          <div className="stats-card">
            <FaProjectDiagram size={30} color={theme === 'dark' ? "#FF6600" : "#FF7F50"} />
            <h3>Total Projects</h3>
            <p>{totalProjects}</p>
          </div>
          <div className="stats-card">
            <FaTasks size={30} color={theme === 'dark' ? "#FF6600" : "#FF7F50"} />
            <h3>Completed Tasks</h3>
            <p>{completedTasks}</p>
          </div>
          <div className="stats-card">
            <FaCalendarAlt size={30} color={theme === 'dark' ? "#FF6600" : "#FF7F50"} />
            <h3>Upcoming </h3>
            <p>{upcomingDeadlines}</p>
          </div>
        </div>
        <button
          className="primary-btn"
          style={{
            background: theme === 'dark' ? 'linear-gradient(135deg, #5F41E4, #4320df)' : 'linear-gradient(135deg, #FF6F00, #FF4500)',
          }}
        >
          View Projects
        </button>
      </div>
    </>
  );
};

export default Dashboard;
