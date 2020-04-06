import React from 'react';
import { Link } from 'react-router-dom';

export default function Product({ product, add }) {
  return (
    <div className="col-md-4">
      <section className="product">
        <div className="view">
          <img src={product.product_image} alt="*" />
          <button className="add slide-in" onClick={() => add(product)}>
            <img src={require('../assets/images/cart.svg')} alt="*" />
            Add to cart
          </button>
        </div>
        <Link to={`product/${product._id}`} className="detail">
          <div className="name">{product.name}</div>
          <div className="price">${product.price}</div>
        </Link>
      </section>
    </div>
  )
}
