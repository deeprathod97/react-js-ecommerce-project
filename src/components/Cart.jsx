import React, { useEffect, useState } from 'react';
import './Cart.css';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('cart')) || [];
    setCartItems(items);
  }, []);

  const removeItem = (index) => {
    const updatedCart = cartItems.filter((_, i) => i !== index);
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const increaseQuantity = (index) => {
    const updatedCart = [...cartItems];
    updatedCart[index].quantity += 1; // Increase quantity by 1
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const decreaseQuantity = (index) => {
    const updatedCart = [...cartItems];
    if (updatedCart[index].quantity > 1) {
      updatedCart[index].quantity -= 1; // Decrease quantity by 1
      setCartItems(updatedCart);
      localStorage.setItem('cart', JSON.stringify(updatedCart));
    }
  };

  // Calculate total items and total price
  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0); // Total number of items
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2); // Total price calculation

  return (
    <div className="cart-container">
      <h1>Your Cart</h1>
      <h2>Total Items: {totalItems}</h2>
      <h2>Total Price: ₹{totalPrice}</h2>
      {cartItems.length > 0 ? (
        cartItems.map((item, index) => (
          <div key={index} className="cart-item">
            <img src={item.image} alt={item.title} className="cart-item-image" />
            <div className="cart-item-details">
              <h3>{item.title}</h3>
              <p>Size: {item.size}</p>
              <p>Price: ₹{item.price}</p>
              <p>Quantity: {item.quantity}</p> {/* Display the quantity */}
            </div>
            <div className="cart-item-actions">
              <button className="quantity-btn" onClick={() => decreaseQuantity(index)}>-</button>
              <button className="quantity-btn" onClick={() => increaseQuantity(index)}>+</button>
              <button className="remove-btn" onClick={() => removeItem(index)}>
                Remove
              </button>
              <button className="delete-btn" onClick={() => removeItem(index)}>
                <i className="fas fa-trash-alt"></i> Delete
              </button>
            </div>
          </div>
        ))
      ) : (
        <p>No items in the cart</p>
      )}
    </div>
  );
};

export default Cart;
