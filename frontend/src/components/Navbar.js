import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../context/AuthContext';

const Navbar = () => {
  const { isAuthenticated, user, logout } = useContext(AuthContext);

  const authLinks = (
    <ul>
      <li>
        <strong>Welcome, {user && user.name}</strong>
      </li>
      <li>
        <button onClick={logout}> {/* CHANGED TO BUTTON */}
          Logout
        </button>
      </li>
    </ul>
  );

  const guestLinks = (
    <ul>
      <li><Link to="/register">Register</Link></li>
      <li><Link to="/login">Login</Link></li>
    </ul>
  );

  return (
    <nav className="navbar"> {/* APPLYING THIS CLASS */}
      <h1>
        <Link to="/">LinkedIn Clone</Link>
      </h1>
      <div>
        {isAuthenticated ? authLinks : guestLinks}
      </div>
    </nav>
  );
};

export default Navbar;