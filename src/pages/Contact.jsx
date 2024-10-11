import React, { useState } from 'react';
import './Contact.css';  // Import the CSS file

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
    console.log('Form Data:', { name, email, message });
  };

  return (
    <div className="contact-container">
      <div className="contact-form-section">
        <h2>Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Name:</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Message:</label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </div>
          <button type="submit">Send Message</button>
        </form>
      </div>

      <div className="contact-info-section">
        <h3>Get in Touch</h3>
        <p>Email: contact@myshop.com</p>
        <p>Phone: +91 98765 43210</p>
        <p>Address: 123, Business Street, City, India</p>
      </div>
    </div>
  );
};

export default Contact;
