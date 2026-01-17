import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsSignUpOpen(false);
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <Link to="/" className="navbar-brand" onClick={closeMenu}>
          Project Lovematch
        </Link>

        <div className={`navbar-toggle ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <ul className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
          <li>
            <Link 
              to="/" 
              className={`navbar-link ${isActive('/') ? 'active' : ''}`}
              onClick={closeMenu}
            >
              Home
            </Link>
          </li>
          <li>
            <Link 
              to="/calendar" 
              className={`navbar-link ${isActive('/calendar') ? 'active' : ''}`}
              onClick={closeMenu}
            >
              Calendar
            </Link>
          </li>
          <li>
            <Link 
              to="/about" 
              className={`navbar-link ${isActive('/about') ? 'active' : ''}`}
              onClick={closeMenu}
            >
              About
            </Link>
          </li>
          <li 
            className="navbar-dropdown"
            onMouseEnter={() => setIsSignUpOpen(true)}
            onMouseLeave={() => setIsSignUpOpen(false)}
          >
            <span className={`navbar-link ${isActive('/signup') ? 'active' : ''}`}>
              Sign Up
              <span className={`dropdown-arrow ${isSignUpOpen ? 'open' : ''}`}>▼</span>
            </span>
            <ul className={`dropdown-menu ${isSignUpOpen ? 'show' : ''}`}>
              <li>
                <a 
                  href="https://forms.gle/g9Cgfbo2Mixnjy8n9" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="dropdown-link"
                  onClick={closeMenu}
                >
                  Volunteer Sign Up
                </a>
              </li>
              <li>
                <span className="dropdown-link disabled">
                  Athlete Sign Up
                  <span className="coming-soon">Coming Soon</span>
                </span>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar; 