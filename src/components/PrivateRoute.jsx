import { Route, Navigate } from 'react-router-dom';

const PrivateRoute = ({ element, ...rest }) => {
  const isLoggedIn = localStorage.getItem('isLoggedIn'); // Check if user is logged in
  return isLoggedIn ? element : <Navigate to="/login" />; // Redirect to login if not logged in
};
export default PrivateRoute