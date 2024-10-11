import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [size, setSize] = useState('');

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${id}`)
      .then(response => setProduct(response.data))
      .catch(error => console.error(error));
  }, [id]);

  const addToCart = () => {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    cartItems.push({ ...product, size });
    localStorage.setItem('cart', JSON.stringify(cartItems));
    alert('Product added to cart!');
  };

  return (
    product ? (
      <div className="product-details">
        <img src={product.image} alt={product.title} />
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <p>Price: ${product.price}</p>
        <select value={size} onChange={(e) => setSize(e.target.value)}>
          <option value="">Select Size</option>
          <option value="S">Small</option>
          <option value="M">Medium</option>
          <option value="L">Large</option>
        </select> 
        <button onClick={addToCart}>Add to Cart</button>
      </div>
    ) : (
      <p>Loading...</p>
    )
  );
};

export default ProductDetails;
