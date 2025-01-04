import React, { useEffect, useState } from 'react';
import '../assets/css/Navbar.css';
import logo from '../assets/images/logo-new.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import {Link, useNavigate} from 'react-router-dom'

export const NavBar = () => {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  useEffect(() => {
    const loggedInStatus = localStorage.getItem('isLoggedIn');
    if (loggedInStatus === 'true') {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('isLoggedIn');
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
    localStorage.setItem('isLoggedIn', 'true');
    navigate('/login'); 
  };

  return (
    <header className="navbar">
      <div className="logo-container">
        <img src={logo} alt="BloodBridge Logo" className="logo" />
      </div>
      
      <nav className="nav">
      <div className="auth-links">
          {isLoggedIn ? (
            <div className="profile-icon" onClick={toggleDropdown}>
              <span><FontAwesomeIcon icon={faUserCircle} size="2x" /></span>
              {isDropdownOpen && (
                <div className="dropdown-menu">
                  <Link to="/account">Account</Link>
                  <Link to="/" onClick={handleLogout}>Logout</Link>
                </div>
              )}
            </div>
          ) : (
            <Link to="/login" onClick={handleLogin}>Login</Link>
          )}
        </div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li className="dropdown">
            <span className="dropbtn">Services</span>
            <div className="dropdown-content">
              <Link to="/donor">Donor Management</Link>
              <Link to="/inventory">Inventory Management</Link>
              <Link to="/requests">Blood Requests</Link>
            </div>
          </li>
          <li><Link to="/hospitals">Hospital</Link></li>
          <li><Link to="/blood_bank">Blood Bank</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          {/* <li><Link to="/login">Login</Link></li> */}
        </ul>
      </nav>
    </header>
  );
};

//  default NavBar;
