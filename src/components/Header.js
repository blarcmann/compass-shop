import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/components/header.scss';

export default function Header() {
  const [menu, toggle] = useState(false);

  function toggleMenu() {
    toggle(prevState => !prevState);
  }

  return (
    <nav className="header">
      <div className="container-fluid">
        <div className="desktop-header">
          <div className="row">
            <div className="logo">
              <Link to="/home">
                <img src={require('../assets/images/desktop-logo.png')} alt="@" />
              </Link>
            </div>
            <div className="ml-auto menus">
              <div className="menu-item"><Link to="/home">Home</Link></div>
              <div className="menu-item"><Link to="/shop">Shop</Link></div>
              <div className="menu-item"><Link to="/contact">Contact</Link></div>
              <div className="menu-item"><Link to="/sign-in">Sign In</Link></div>
              <div className="menu-item">
                <Link to="/cart" className="cart">
                  <img src={require('../assets/images/shopping-cart.svg')} alt="@" />
                  <span>4</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="mobile-cover">
          <div className="mobile-header">
            <div className="logo">
              <Link to="/home">
                <img src={require('../assets/images/mobile-logo.png')} alt="@" />
              </Link>
            </div>
            <div className="items-cover">
              <button className="toggler" onClick={toggleMenu}>
                <img src={require('../assets/images/toggler.svg')} alt="@" />
              </button>
            </div>
          </div>
          <div className={menu ? "ml-auto menus slide-in" : "hide"}>
            <div className="menu-item"><Link to="/home">Home</Link></div>
            <div className="menu-item"><Link to="/shop">Shop</Link></div>
            <div className="menu-item"><Link to="/contact">Contact</Link></div>
            <div className="menu-item"><Link to="/sign-in">Sign In</Link></div>
            <div className="menu-item">
              <Link to="/cart" className="cart">
                <img src={require('../assets/images/shopping-cart.svg')} alt="@" />
                <span>4</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
