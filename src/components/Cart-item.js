import React, { useState } from 'react'
import { Link } from 'react-router-dom';

export default function CartItem({ product }) {
  const [quantity, setVal] = useState(product.quantity);
  // const [prod, remove] = useState('');

  function removeProduct(id) {
    console.log('init', id);
    const products = JSON.parse(localStorage.getItem('cart'));
    products.forEach(p => {
      if (id === p._id) {
        products.splice(id, 1);
      }
    });
    localStorage.setItem('cart', JSON.stringify(products));
    window.location.reload();
  }

  function setQuantity(val) {
    setVal(prevState => val);
    product.quantity = val;
    const products = JSON.parse(localStorage.getItem('cart'));
    products.forEach(p => {
      if (product._id === p._id) {
        p.quantity = val
      }
    });
    localStorage.setItem('cart', JSON.stringify(products))
  }

  return (
    <div className="cart-item">
      <div className="remove-cart-item" onClick={() => removeProduct(product._id)}>
        <img src={require('../assets/images/delete.svg')} alt="*" />
      </div>
      <div className="image">
        <img src={product.product_image} alt="" />
      </div>
      <Link to="/shop" className="name">{product.name}</Link>
      <div className="price">${product.price}</div>
      <div className="amount">
        <input type="number" value={quantity} onChange={e => setQuantity(e.target.value)} />
      </div>
    </div>
  )
}
