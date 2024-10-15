// Login.jsx
import React, { useState } from 'react';
import './Login.css'; // Import the CSS file
import emailjs from 'emailjs-com'; // Import EmailJS

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    
    // Here, you would typically handle the login logic
    if (email && password) {
      // Store the email in local storage
      localStorage.setItem('userEmail', email);
      alert(`Logged in as: ${email}`);
      
      // Send email
      sendEmail(email);
    } else {
      setError('Please fill in both fields.');
    }
  };

  const sendEmail = (userEmail) => {
    const templateParams = {
      to_email: 'deeprathod788@gmail.com', // Your email address
      user_email: userEmail,
    };

    emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams, 'YOUR_USER_ID')
      .then((response) => {
        console.log('Email sent successfully!', response.status, response.text);
      })
      .catch((error) => {
        console.error('Failed to send email:', error);
      });
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleLogin}>
        <div className="input-group">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="login-btn">Login</button>
      </form>
      <p className="signup-link">Don't have an account? <a href="/signup">Sign Up</a></p>
    </div>
  );
};

export default Login;
