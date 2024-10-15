import React, { useEffect, useState } from 'react';
import './Cart.css';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [giftCardCode, setGiftCardCode] = useState('');
  const [discount, setDiscount] = useState(0);
  const [fullName, setFullName] = useState('');
  const [address, setAddress] = useState('');
  const [pinCode, setPinCode] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [district, setDistrict] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('UPI');
  const [upiId, setUpiId] = useState('');
  const [cardDetails, setCardDetails] = useState({ cardNumber: '', expiry: '', cvv: '' });
  const [isOrderPlaced, setIsOrderPlaced] = useState(false);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('cart')) || [];
    const initializedItems = items.map(item => ({
      ...item,
      quantity: item.quantity || 1,
    }));
    setCartItems(initializedItems);
  }, []);

  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);

  const applyGiftCard = () => {
    if (giftCardCode) {
      setDiscount(100);
      alert('Gift card applied! You received a ₹100 discount.');
    } else {
      alert('Please enter a valid gift card code.');
    }
    setGiftCardCode('');
  };

  const handleCheckout = () => {
    if (!fullName || !address || !pinCode || !mobileNumber || !district) {
      alert('Please fill in all the delivery details.');
      return;
    }

    if (paymentMethod === 'UPI' && !upiId) {
      alert('Please enter your UPI ID.');
      return;
    }

    if (paymentMethod === 'Card' && (!cardDetails.cardNumber || !cardDetails.expiry || !cardDetails.cvv)) {
      alert('Please fill in all the card details.');
      return;
    }

    setIsOrderPlaced(true);
  };

  const handlePaymentChange = (method) => {
    setPaymentMethod(method);
    setUpiId('');
    setCardDetails({ cardNumber: '', expiry: '', cvv: '' });
  };

  return (
    <div className="cart-container">
      <h1><i className="fas fa-shopping-cart"></i> Your Cart</h1>
      <h2><i className="fas fa-box"></i> Total Items: {totalItems}</h2>
      <h2><i className="fas fa-tags"></i> Total Price: ₹{totalPrice}</h2>
      <h2><i className="fas fa-gift"></i> Discount: ₹{discount}</h2>
      <h2><i className="fas fa-wallet"></i> Final Price: ₹{(totalPrice - discount).toFixed(2)}</h2>

      {cartItems.length > 0 ? (
        <div className="cart-items">
          {cartItems.map((item, index) => (
            <div key={index} className="cart-item">
              <img src={item.image} alt={item.title} className="cart-item-image" />
              <div className="cart-item-details">
                <h3>{item.title}</h3>
                <p><i className="fas fa-rupee-sign"></i> Price: ₹{item.price}</p>
                <p><i className="fas fa-sort-numeric-up-alt"></i> Quantity: {item.quantity}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>No items in the cart</p>
      )}

      {/* Gift Card Section */}
      <div className="gift-card-section">
        <input 
          type="text" 
          placeholder="Enter Gift Card Code" 
          value={giftCardCode} 
          onChange={(e) => setGiftCardCode(e.target.value)} 
        />
        <button onClick={applyGiftCard}><i className="fas fa-gift"></i> Apply Gift Card</button>
      </div>

      {/* Delivery Details Section */}
      <div className="delivery-details">
        <h3><i className="fas fa-truck"></i> Delivery Details</h3>
        <input 
          type="text" 
          placeholder="Full Name" 
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          required 
        />
        <input 
          type="text" 
          placeholder="Address" 
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          required 
        />
        <input 
          type="text" 
          placeholder="Pin Code" 
          value={pinCode}
          onChange={(e) => setPinCode(e.target.value)}
          required 
        />
        <input 
          type="text" 
          placeholder="Mobile Number" 
          value={mobileNumber}
          onChange={(e) => setMobileNumber(e.target.value)}
          required 
        />
        <select value={district} onChange={(e) => setDistrict(e.target.value)} required>
          <option value="">Select District</option>
          <option value="Ahmedabad">Ahmedabad</option>
          <option value="Surat">Surat</option>
          <option value="Vadodara">Vadodara</option>
          <option value="Rajkot">Rajkot</option>
        </select>
      </div>

      {/* Payment Method Section */}
      <div className="payment-method">
        <h3><i className="fas fa-money-check-alt"></i> Payment Method</h3>
        <label>
          <input 
            type="radio" 
            value="UPI" 
            checked={paymentMethod === 'UPI'}
            onChange={() => handlePaymentChange('UPI')}
          /> <i className="fas fa-mobile-alt"></i> UPI (Google Pay, PhonePe)
        </label>
        {paymentMethod === 'UPI' && (
          <input 
            type="text" 
            placeholder="Enter UPI ID" 
            value={upiId}
            onChange={(e) => setUpiId(e.target.value)}
          />
        )}
        <label>
          <input 
            type="radio" 
            value="Card" 
            checked={paymentMethod === 'Card'}
            onChange={() => handlePaymentChange('Card')}
          /> <i className="fas fa-credit-card"></i> Debit/Credit Card
        </label>
        {paymentMethod === 'Card' && (
          <div className="card-details">
            <input 
              type="text" 
              placeholder="Card Number" 
              value={cardDetails.cardNumber}
              onChange={(e) => setCardDetails({ ...cardDetails, cardNumber: e.target.value })}
            />
            <input 
              type="text" 
              placeholder="Expiry (MM/YY)" 
              value={cardDetails.expiry}
              onChange={(e) => setCardDetails({ ...cardDetails, expiry: e.target.value })}
            />
            <input 
              type="password" 
              placeholder="CVV" 
              value={cardDetails.cvv}
              onChange={(e) => setCardDetails({ ...cardDetails, cvv: e.target.value })}
            />
          </div>
        )}
        <label>
          <input 
            type="radio" 
            value="Cash" 
            checked={paymentMethod === 'Cash'}
            onChange={() => handlePaymentChange('Cash')}
          /> <i className="fas fa-money-bill-wave"></i> Cash on Delivery
        </label>
      </div>

      <button onClick={handleCheckout} className="checkout-btn"><i className="fas fa-shopping-bag"></i> Proceed to Checkout</button>

      {isOrderPlaced && <p className="success-message"><i className="fas fa-check-circle"></i> Order placed successfully! You will receive a confirmation soon.</p>}
    </div>
  );
};

export default Cart;
