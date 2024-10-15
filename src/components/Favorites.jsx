// Favorites.jsx
import React from 'react';
import './Favorites.css'; // Import the CSS file

const Favorites = () => {
  const favorites = JSON.parse(localStorage.getItem('favorites')) || []; // Get favorites from local storage

  const removeFavorite = (index) => {
    const updatedFavorites = favorites.filter((_, i) => i !== index); // Remove the item at the specified index
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites)); // Update local storage
    window.location.reload(); // Refresh the page to reflect changes
  };

  return (
    <div className="favorites-container">
      <h1>Your Favorites</h1>
      {favorites.length > 0 ? (
        <div className="favorites-list">
          {favorites.map((product, index) => (
            <div key={index} className="favorite-item">
              <img src={product.image} alt={product.title} />
              <h3>{product.title}</h3>
              <p>Price: ₹{product.price}</p>
              <button className="remove-favorite-btn" onClick={() => removeFavorite(index)}>
                Remove
              </button>
            </div>
          ))}
        </div>
      ) : (
        <p>No favorites yet!</p>
      )}
    </div>
  );
};

export default Favorites;
