import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Filter from '../components/Filter';
import Pagination from '../components/Pagination';
import '../assets/styles/screens/shop.scss';
import { sideColl, shopSorting } from '../constants/mock';
import Collections from '../components/Collections';
import Searchbar from '../components/Searchbar';
import PageBreadcrumb from '../components/Page-breadcrumb';

export class Shop extends Component {
  render() {
    const paths = ['shop'];
    return (
      <>
        <Header />
        <div className="shop">
          <div className="container-fluid">
            <PageBreadcrumb paths={paths} title="Shop" />
            <div className="row">
              <div className="col-lg-3">
                <div className="sidebar">
                  <Searchbar />
                  <div className="categories">
                    <div className="title">Categories</div>
                    <Collections coll={sideColl} size="large" />
                  </div>
                </div>
                <div className="mobile-header small-screens-only ">
                  <Searchbar />
                </div>
              </div>
              <div className="col-lg-9">
                <div className="top-tile large-screens-only">
                  <div className="page-result">Showing 1–12 of 19 results</div>
                  <Filter options={shopSorting} />
                </div>
                <div className="top-tile small-screens-only">
                  <Filter options={sideColl} />
                  <Filter options={shopSorting} />
                </div>
                <div className="products">
                  <div className="row">
                    <div className="col-md-4">
                      <Link to="product/1234567" className="product">
                        <div className="view">
                          <img src={require('../assets/images/menu-4.jpg')} alt="*" />
                          <button className="add slide-in">Add to cart</button>
                        </div>
                        <div className="detail">
                          <div className="name">Bottle bag</div>
                          <div className="price">$59</div>
                        </div>
                      </Link>
                    </div>
                    <div className="col-md-4">
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
                    <div className="col-md-4">
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
                    <div className="col-md-4">
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
                    <div className="col-md-4">
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
                    <div className="col-md-4">
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
                    <div className="col-md-4">
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
                    <div className="col-md-4">
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
                    <div className="col-md-4">
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
                    <div className="col-md-4">
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
                    <div className="col-md-4">
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
                    <div className="col-md-4">
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
                <Pagination />
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
