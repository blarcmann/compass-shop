import React, { Component } from 'react';
import { connect } from 'react-redux';

import Header from '../components/Header';
import Footer from '../components/Footer';
import PageBreadcrumb from '../components/Page-breadcrumb';
import Loader from '../components/Loader';

import '../assets/styles/pages/product-details.scss';
import { fetchProduct, addToCart } from '../actions/products';

export class ProductDetails extends Component {
  state = {
    id: ''
  }
  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.fetchProduct(id);
    this.setState({ id })
  }
  render() {
    const paths = ['product'];
    const imgs = ['a', 'b', 'c'];
    const { product, addToCart } = this.props;
    if (!this.props.product) return <Loader loading={this.state.loading} />
    return (
      <>
        <Header />
        <div className="product-details">
          <div className="container-fluid">
            <div className="row">
              <PageBreadcrumb paths={paths} title="Product" />
            </div>
            <div className="row">
              <div className="col-xl-8">
                <div className="gallery">
                  <div className="parts">
                    {imgs.map((i) => (
                      <div key={i} className="each-part"
                        style={{ backgroundImage: `url(${product.product_image ? product.backgroundImage : '../assets/images/404.svg'})` }}>
                      </div>
                    ))}
                  </div>
                  <div className="full">
                    <img src={product.product_image ? product.product_image : '../assets/images/404.svg'} alt={product.name} />
                  </div>
                </div>
              </div>
              <div className="col-xl-4">
                <div className="product-data">
                  <h2 className="name">{product.name}</h2>
                  <div className="price">${product.price}</div>
                  <div className="rating">
                    {new Array(4).fill('***').map((item, index) => (<span className="stars" key={index}>★</span>))}
                  </div>
                  <p className="description">{product.description}</p>
                  <ul className="others">
                    <li>
                      <span className="tag">Category: </span>
                      <span className="value">{product.category}</span>
                    </li>
                    <li>
                      <span className="tag">SKU: </span>
                      <span className="value">22</span>
                    </li>
                    <li>
                      <span className="tag">Tags: </span>
                      <span className="value">Equipments, {product.category}</span>
                    </li>
                  </ul>
                  <button className="bttn primary" onClick={() => addToCart(product)}>Add to cart</button>
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
  product: state.product.singleProduct
})

const mapDispatchToProps = { fetchProduct, addToCart }

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails)
