import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../assets/styles/screens/shop.scss';
import { sideColl } from '../constants/mock';
import Collections from '../components/Collections';

export class Shop extends Component {
  render() {
    return (
      <>
        <Header />
        <div className="shop">
          <div className="container-fluid">
            <div className="row">
              <div className="heading">
                <h1 className="title">Shop</h1>
                <div className="br-crumb">
                  <Link to="/">home</Link>
                  <span>/</span>
                  <Link to="/shop">shop</Link>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-3">
                <div className="sidebar">
                  <div className="searchbar">
                    <input type="search" name="search" placeholder="search..." className="form-item" />
                    <img src={require('../assets/images/search.png')} alt="*" />
                  </div>
                  <div className="categories">
                    <div className="title">Categories</div>
                    <Collections coll={sideColl} size="large" />
                  </div>
                </div>
              </div>
              <div className="col-lg-9">
                <div className="top-tile">
                  <div className="result">Showing 1–12 of 19 results</div>
                  <div className="sorting">
                    <select name="sort" className="form-item">
                      <option value="">Default sorting</option>
                      <option value="">Sort by newness</option>
                      <option value="">Sort by average rating</option>
                      <option value="">Sort by popularity</option>
                      <option value="">Sort by price: low - high</option>
                    </select>
                  </div>
                </div>
                <div className="products">
                  <div className="row">
                    <div className="col-lg-4">
                      <div className="product">
                        <div className="view">
                          <img src={require('../assets/images/menu-4.jpg')} alt="*" />
                          <button className="add slide-in">Add to cart</button>
                        </div>
                        <div className="detail">
                          <div className="name">Bottle bag</div>
                          <div className="price">$59</div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="product">
                        <div className="view">
                          <img src={require('../assets/images/menu-4.jpg')} alt="*" />
                          <button className="add">Add to cart</button>
                        </div>
                        <div className="detail">
                          <div className="name">Bottle bag</div>
                          <div className="price">$59</div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="product">
                        <div className="view">
                          <img src={require('../assets/images/menu-4.jpg')} alt="*" />
                          <button className="add">Add to cart</button>
                        </div>
                        <div className="detail">
                          <div className="name">Bottle bag</div>
                          <div className="price">$59</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-lg-4">
                      <div className="product">
                        <div className="view">
                          <img src={require('../assets/images/menu-4.jpg')} alt="*" />
                          <button className="add slide-in">Add to cart</button>
                        </div>
                        <div className="detail">
                          <div className="name">Bottle bag</div>
                          <div className="price">$59</div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="product">
                        <div className="view">
                          <img src={require('../assets/images/menu-4.jpg')} alt="*" />
                          <button className="add">Add to cart</button>
                        </div>
                        <div className="detail">
                          <div className="name">Bottle bag</div>
                          <div className="price">$59</div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="product">
                        <div className="view">
                          <img src={require('../assets/images/menu-4.jpg')} alt="*" />
                          <button className="add">Add to cart</button>
                        </div>
                        <div className="detail">
                          <div className="name">Bottle bag</div>
                          <div className="price">$59</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-lg-4">
                      <div className="product">
                        <div className="view">
                          <img src={require('../assets/images/menu-4.jpg')} alt="*" />
                          <button className="add slide-in">Add to cart</button>
                        </div>
                        <div className="detail">
                          <div className="name">Bottle bag</div>
                          <div className="price">$59</div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="product">
                        <div className="view">
                          <img src={require('../assets/images/menu-4.jpg')} alt="*" />
                          <button className="add">Add to cart</button>
                        </div>
                        <div className="detail">
                          <div className="name">Bottle bag</div>
                          <div className="price">$59</div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="product">
                        <div className="view">
                          <img src={require('../assets/images/menu-4.jpg')} alt="*" />
                          <button className="add">Add to cart</button>
                        </div>
                        <div className="detail">
                          <div className="name">Bottle bag</div>
                          <div className="price">$59</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-lg-4">
                      <div className="product">
                        <div className="view">
                          <img src={require('../assets/images/menu-4.jpg')} alt="*" />
                          <button className="add slide-in">Add to cart</button>
                        </div>
                        <div className="detail">
                          <div className="name">Bottle bag</div>
                          <div className="price">$59</div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="product">
                        <div className="view">
                          <img src={require('../assets/images/menu-4.jpg')} alt="*" />
                          <button className="add">Add to cart</button>
                        </div>
                        <div className="detail">
                          <div className="name">Bottle bag</div>
                          <div className="price">$59</div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="product">
                        <div className="view">
                          <img src={require('../assets/images/menu-4.jpg')} alt="*" />
                          <button className="add">Add to cart</button>
                        </div>
                        <div className="detail">
                          <div className="name">Bottle bag</div>
                          <div className="price">$59</div>
                        </div>
                      </div>
                    </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Shop)
