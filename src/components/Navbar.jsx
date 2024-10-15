// Navbar.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';  // Import the CSS file
// import logo from '../assets/logo.png'; // Import your logo image

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const favoritesCount = JSON.parse(localStorage.getItem('favorites'))?.length || 0; // Count of favorites

  return (
    <nav className="navbar">
      <div className="logo">
        <img src="https://p.kindpng.com/picc/s/160-1607840_saber-png-free-cavalry-saber-png-transparent-png.png" alt="Company Logo" className="company-logo" /> {/* Company Logo */}
        <Link to="/">Jay Bhavani</Link>
      </div>
      <div className="menu-icon" onClick={toggleMenu}>
        <i className={menuOpen ? "fas fa-times" : "fas fa-bars"}></i>
      </div>
      <ul className={menuOpen ? 'nav-links open' : 'nav-links'}>
        <li><Link to="/" onClick={() => setMenuOpen(false)}><i className="fas fa-home"></i> Home</Link></li>
        <li><Link to="/about" onClick={() => setMenuOpen(false)}><i className="fas fa-info-circle"></i> About</Link></li>
        <li><Link to="/cart" onClick={() => setMenuOpen(false)}><i className="fas fa-shopping-cart"></i> Cart</Link></li>
        <li><Link to="/favorites" onClick={() => setMenuOpen(false)}><i className="fas fa-heart"></i> Favorites {favoritesCount > 0 && <span className="badge">{favoritesCount}</span>}</Link></li>
        <li><Link to="/contact" onClick={() => setMenuOpen(false)}><i className="fas fa-envelope"></i> Contact</Link></li>
        <li><Link to="/login" onClick={() => setMenuOpen(false)}><i className="fas fa-sign-in-alt"></i> Login</Link></li>
        <li><Link to="/signup" onClick={() => setMenuOpen(false)}><i className="fas fa-user-plus"></i> Sign Up</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
