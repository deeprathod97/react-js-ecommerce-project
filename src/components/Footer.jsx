import React from 'react';
import './Footer.css';  // Import the CSS file here

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        {/* About Section */}
        <div className="footer-section">
          <h3>About Us</h3>
          <p>
            We are a leading e-commerce platform offering a wide range of products, 
            from electronics to clothing. Our mission is to provide a seamless shopping 
            experience to our customers.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/cart">Cart</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/login">Login</a></li>
            <li><a href="/signup">Sign Up</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="footer-section footer-social">
          <h3>Follow Us</h3>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
        </div>

        {/* Contact Info */}
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>Email: deeprathod788@gmail.com</p>
          <p>Phone: +91 9737468847</p>
          <p>Address: Amreli,Gujarat, India</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2024 MyShop. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
