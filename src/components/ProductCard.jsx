import React, { useState } from 'react';
import './ProductCard.css'; // Import the CSS file for styling

const ProductCard = ({ product }) => {
  const [isFavorite, setIsFavorite] = useState(false); // State to manage favorite status

  const handleAddToCart = () => {
    const existingCart = JSON.parse(localStorage.getItem('cart')) || [];
    const isItemInCart = existingCart.find(item => item.id === product.id);

    if (isItemInCart) {
      alert('Item is already in the cart!');
    } else {
      const newCart = [...existingCart, product];
      localStorage.setItem('cart', JSON.stringify(newCart));
      alert('Item added to cart!');
    }
  };

  const handleToggleFavorite = () => {
    setIsFavorite(!isFavorite);
    const existingFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    
    if (!isFavorite) {
      // Add to favorites
      const newFavorites = [...existingFavorites, product];
      localStorage.setItem('favorites', JSON.stringify(newFavorites));
      alert('Item added to favorites!');
    } else {
      // Remove from favorites
      const updatedFavorites = existingFavorites.filter(item => item.id !== product.id);
      localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
      alert('Item removed from favorites!');
    }
  };

  return (
    <div className="product-card">
      <div className="image-container">
        <img src={product.image} alt={product.title} />
        <button className={`favorite-btn ${isFavorite ? 'favorited' : ''}`} onClick={handleToggleFavorite}>
          {isFavorite ? '❤️' : '🤍'}
        </button>
      </div>
      <h3>{product.title}</h3>
      <p>Price: ₹{product.price}</p>
      <button onClick={handleAddToCart}>Add to Cart</button>

      {/* Footer Section */}
      <div className="product-footer">
        <p><i className="fas fa-truck"></i> Free delivery for orders over ₹1000</p>
        <p><i className="fas fa-info-circle"></i> 30-day return policy</p>
      </div>
    </div>
  );
};

export default ProductCard;
