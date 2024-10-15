// Checkout.jsx
import DeliveryDetails from './DeliveryDetails';
import React, { useState } from 'react';
import './Checkout.css'; // Ensure you have the styles

const districts = [
  "Ahmedabad", "Bengaluru", "Chennai", "Delhi", "Hyderabad", "Kolkata", "Mumbai", "Pune", "Surat", "Jaipur", // Add more districts as needed
];

const Checkout = ({ cartItems, totalPrice, discount, onClose }) => {
  const [fullName, setFullName] = useState('');
  const [address, setAddress] = useState('');
  const [pinCode, setPinCode] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [selectedDistrict, setSelectedDistrict] = useState('');

  const handlePayment = () => {
    // Here you would integrate your payment logic
    if (!fullName || !address || !pinCode || !mobileNumber || !selectedDistrict) {
      alert('Please fill all the fields before proceeding to payment.');
      return;
    }

    // Simulate payment processing
    alert('Payment processed successfully! Your order will be delivered shortly.');
    onClose(); // Close the checkout modal after payment
  };

  return (
    <div className="checkout-modal">
      <div className="checkout-content">
        <h2>Checkout</h2>
        <h3>Order Summary</h3>
        {cartItems.map((item, index) => (
          <div key={index} className="checkout-item">
            <h4>{item.title} (Quantity: {item.quantity})</h4>
            <p>Price: ₹{item.price} x {item.quantity} = ₹{(item.price * item.quantity).toFixed(2)}</p>
          </div>
        ))}
        <h3>Total Price: ₹{totalPrice}</h3>
        <h3>Discount: ₹{discount}</h3>
        <h3>Final Price: ₹{(totalPrice - discount).toFixed(2)}</h3>

        {/* User Information Form */}
        <div className="user-info">
          <input
            type="text"
            placeholder="Full Name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          <input
            type="text"
            placeholder="Pin Code"
            value={pinCode}
            onChange={(e) => setPinCode(e.target.value)}
            maxLength="6" // Indian pin codes are 6 digits
          />
          <input
            type="text"
            placeholder="Mobile Number"
            value={mobileNumber}
            onChange={(e) => setMobileNumber(e.target.value)}
            maxLength="10" // Indian mobile numbers are 10 digits
          />
          <select
            value={selectedDistrict}
            onChange={(e) => setSelectedDistrict(e.target.value)}
          >
            <option value="" disabled>Select District</option>
            {districts.map((district, index) => (
              <option key={index} value={district}>{district}</option>
            ))}
          </select>
        </div>

        <button className="pay-btn" onClick={handlePayment}>Pay Now</button>
        <button className="close-btn" onClick={onClose}>Close</button>
      </div>
      <div className="cart-page">
      {/* Cart items go here */}
      
      <DeliveryDetails />
      
      {/* Payment and other sections */}
    </div>
    </div>
    
  );
};

export default Checkout;
