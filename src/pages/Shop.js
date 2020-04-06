import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../assets/styles/pages/shop.scss';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Filter from '../components/Filter';
import Pagination from '../components/Pagination';
import Product from '../components/Product';
import PageBreadcrumb from '../components/Page-breadcrumb';
import Searchbar from '../components/Searchbar';
import Collections from '../components/Collections';
import Loader from '../components/Loader';

import { sideColl, shopSorting } from '../constants/mock';
import { fetchProducts, addToCart } from '../actions/products';

export class Shop extends Component {
  state = {
    loading: true
  }

  componentDidMount() {
    this.props.fetchProducts();
  }
  render() {
    const paths = ['shop'];
    const { products, addToCart } = this.props;
    if (!this.props.products[0]) return <Loader loading={this.state.loading} />
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
                  <div className="page-result">Showing 1–{products[0].length} of {products[0].length} results</div>
                  <Filter options={shopSorting} />
                </div>
                <div className="top-tile small-screens-only">
                  <Filter options={sideColl} />
                  <Filter options={shopSorting} />
                </div>
                <div className="products">
                  <div className="row">
                    {products && products.length > 0 ?
                      products[0].map((product, i) => (
                        <Product product={product} key={i} add={addToCart} />
                      ))
                      : ''
                    }
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
  products: state.product.allProducts
})

const mapDispatchToProps = { fetchProducts, addToCart }

export default connect(mapStateToProps, mapDispatchToProps)(Shop)
