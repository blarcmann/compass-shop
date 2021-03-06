import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../assets/styles/pages/cart.scss';
import PageBreadcrumb from '../components/Page-breadcrumb';
import Loader from '../components/Loader';
import CartItem from '../components/Cart-item';

import { checkout } from '../actions/products';

export class Cart extends Component {

  getCartTotal = () => {
    let total = 0;
    this.props.cart.forEach((data, index) => {
      total += data['price'] * data.quantity;
    });
    return total;
  }

  render() {
    const paths = ['cart'];
    const { cart, checkout } = this.props;
    if (!this.props.cart) return <Loader loading={this.state.loading} />
    return (
      <>
        <Header />
        <div className="cart">
          <div className="container-fluid">
            <PageBreadcrumb paths={paths} title="Cart" />
            <div className="row">
              <div className="col-lg-7">
                {!this.props.cart || !this.props.cart.length ?
                  <h1 className="mt-5 mb-5 ml-4">Cart is empty!</h1>
                  : ''}
                <div className="cart-items">
                  {/* <h2 className="section-title">Your cart</h2> */}
                  {cart.map((product, i) => (
                    <CartItem key={i} product={product} />
                  ))}
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
                        <div className="value">${this.getCartTotal()}</div>
                      </div>
                      <div className="each">
                        <div className="label">shipping</div>
                        <div className="value">$23 (fixed)</div>
                      </div>
                    </div>
                    <div className="total">
                      <h3 className="label">shipping</h3>
                      <h3 className="value">${this.getCartTotal() !== 0 ? this.getCartTotal() + 23 : 0}</h3>
                    </div>
                    <button className="bttn secondary" onClick={() => checkout(this.props)}>
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
  cart: state.product.cart
})

const mapDispatchToProps = { checkout }

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
