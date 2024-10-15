// Payment.jsx
import React, { useState } from 'react';
import './Payment.css'; // Import the CSS file

const Payment = () => {
  const [selectedMethod, setSelectedMethod] = useState('');

  const handlePayment = (e) => {
    e.preventDefault();
    if (selectedMethod) {
      alert(`Payment initiated through ${selectedMethod}`);
    } else {
      alert('Please select a payment method');
    }
  };

  return (
    <div className="payment-container">
      <h2>Select Payment Method</h2>
      <form onSubmit={handlePayment}>
        <div className="payment-methods">
          <label className="payment-option">
            <input 
              type="radio" 
              value="Google Pay" 
              checked={selectedMethod === 'Google Pay'} 
              onChange={(e) => setSelectedMethod(e.target.value)} 
            />
            <img src="/images/google-pay.png" alt="Google Pay" className="payment-logo" />
            Google Pay
          </label>

          <label className="payment-option">
            <input 
              type="radio" 
              value="PhonePe" 
              checked={selectedMethod === 'PhonePe'} 
              onChange={(e) => setSelectedMethod(e.target.value)} 
            />
            <img src="/images/phonepe.png" alt="PhonePe" className="payment-logo" />
            PhonePe
          </label>

          <label className="payment-option">
            <input 
              type="radio" 
              value="Paytm" 
              checked={selectedMethod === 'Paytm'} 
              onChange={(e) => setSelectedMethod(e.target.value)} 
            />
            <img src="/images/paytm.png" alt="Paytm" className="payment-logo" />
            Paytm
          </label>
        </div>

        <button type="submit" className="pay-btn">Proceed to Pay</button>
      </form>
    </div>
  );
};

export default Payment;
