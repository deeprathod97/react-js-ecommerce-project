import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} />
      <h3>{product.title}</h3>
      <p>Price: ${product.price}</p>
      <Link to={`/product/${product.id}`}>
        <button>Buy Now</button>
      </Link>
    </div>
  );
};

export default ProductCard;
