import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../assets/styles/pages/cart.scss';
import PageBreadcrumb from '../components/Page-breadcrumb';

export class Cart extends Component {
  render() {
    const paths = ['cart'];
    return (
      <>
        <Header />
        <div className="cart">
          <div className="container-fluid">
            <PageBreadcrumb paths={paths} title="Cart" />
            <div className="row">
              <div className="col-lg-7">
                <div className="cart-items">
                  <h2 className="section-title">Your cart</h2>
                  <div className="cart-item">
                    <div className="remove-cart-item">
                      <img src={require('../assets/images/delete.svg')} alt="*" />
                    </div>
                    <div className="image">
                      <img src={require('../assets/images/menu-2.jpg')} alt="" />
                    </div>
                    <Link to="/shop" className="name">Almord jersey (away)</Link>
                    <div className="price">$32</div>
                    <div className="amount">
                      <input type="number" />
                    </div>
                  </div>
                  <div className="cart-item">
                    <div className="remove-cart-item">
                      <img src={require('../assets/images/delete.svg')} alt="*" />
                    </div>
                    <div className="image">
                      <img src={require('../assets/images/menu-2.jpg')} alt="" />
                    </div>
                    <Link to="/shop" className="name">Almord jersey (away)</Link>
                    <div className="price">$32</div>
                    <div className="amount">
                      <input type="number" />
                    </div>
                  </div>
                  <div className="cart-item">
                    <div className="remove-cart-item">
                      <img src={require('../assets/images/delete.svg')} alt="*" />
                    </div>
                    <div className="image">
                      <img src={require('../assets/images/menu-2.jpg')} alt="" />
                    </div>
                    <Link to="/shop" className="name">Almord jersey (away)</Link>
                    <div className="price">$32</div>
                    <div className="amount">
                      <input type="number" />
                    </div>
                  </div>
                  <div className="cart-item">
                    <div className="remove-cart-item">
                      <img src={require('../assets/images/delete.svg')} alt="*" />
                    </div>
                    <div className="image">
                      <img src={require('../assets/images/menu-2.jpg')} alt="" />
                    </div>
                    <Link to="/shop" className="name">Almord jersey (away)</Link>
                    <div className="price">$32</div>
                    <div className="amount">
                      <input type="number" />
                    </div>
                  </div>
                  <div className="back">
                    <Link to="/shop" className="bttn primary">
                      <img src={require('../assets/images/back.svg')} className="left" alt="" />
                      Back to shop
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-5">
                <div className="totals">
                  <div className="content">
                    <h2 className="section-title">cart totals</h2>
                    <div className="sub-totals">
                      <div className="each">
                        <div className="label">sub total</div>
                        <div className="value">$984</div>
                      </div>
                      <div className="each">
                        <div className="label">shipping</div>
                        <div className="value">$23</div>
                      </div>
                    </div>
                    <div className="total">
                      <h3 className="label">shipping</h3>
                      <h3 className="value">$23</h3>
                    </div>
                    <button className="bttn secondary">
                      Proceed to checkout
                       <img src={require('../assets/images/next.svg')} alt="" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </>
    )
  }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
