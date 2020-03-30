import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/components/footer.scss';

export default function Footer() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="footer">
          <div className="menus">
            <Link to="/home">Home</Link>
            <Link to="/shop">Shop</Link>
            <Link to="/contact">Contact Us</Link>
          </div>
          <div className="writer">
            <a href="https://twitter.com/yemiotola" className="writer" target="_blank" rel="noopener noreferrer">yemiOdetola</a>
          </div>
        </div>
      </div>
    </div>
  )
}
