import React from 'react';
import { Link } from 'react-router-dom';

export default function Product({ product }) {
  return (
    <div className="col-md-4">
      <Link to={`product/${product._id}`} className="product">
        <div className="view">
          <img src={product.product_image} alt="*" />
          <button className="add slide-in">
            <img src={require('../assets/images/cart.svg')} alt="*" />
            Add to cart
          </button>
        </div>
        <div className="detail">
          <div className="name">{product.name}</div>
          <div className="price">${product.price}</div>
        </div>
      </Link>
    </div>
  )
}
