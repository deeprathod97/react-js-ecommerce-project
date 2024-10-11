// ProductCard.js
import React from 'react';

const ProductCard = ({ product }) => {
  const handleAddToCart = () => {
    // Get existing cart items from local storage
    const existingCart = JSON.parse(localStorage.getItem('cart')) || [];

    // Check if the item is already in the cart
    const isItemInCart = existingCart.find(item => item.id === product.id);

    if (isItemInCart) {
      alert('Item is already in the cart!');
    } else {
      // Add the new item to the cart
      const newCart = [...existingCart, product];
      localStorage.setItem('cart', JSON.stringify(newCart));
      alert('Item added to cart!');
    }
  };

  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} />
      <h3>{product.title}</h3>
      <p>Price: ₹{product.price}</p>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};

export default ProductCard;
