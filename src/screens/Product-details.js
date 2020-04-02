import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PageBreadcrumb from '../components/Page-breadcrumb';
import '../assets/styles/screens/product-details.scss';

export class ProductDetails extends Component {
  render() {
    const paths = ['home', 'product']
    return (
      <>
        <Header />
        <div className="product-details">
          <div className="container-fluid">
            <div className="row">
              <PageBreadcrumb paths={paths} title="Contact" />
            </div>
            <div className="row">
              <div className="col-lg-8">
                <div className="parts">
                  <div className="each-part">
                    <img src={require('../assets/images/part-a.jpg')} alt="#" />
                  </div>
                  <div className="each-part">
                    <img src={require('../assets/images/part-b.jpg')} alt="#" />
                  </div>
                  <div className="each-part">
                    <img src={require('../assets/images/part-c.jpg')} alt="#" />
                  </div>
                </div>
                <div className="full">
                  <img src={require('../assets/images/full-product-image.jpg')} alt="#" />
                </div>
              </div>
              <div className="col-lg-4">
                <div className="product-data">
                  <div className="name">LEGGINGS GRAY</div>
                  <div className="price">$56</div>
                  <div className="rating">
                    {new Array(4).fill('***').map((item, index) => (<span className="stars" key={index}>★</span>))}
                  </div>
                  <div className="desc">Creating the balance of elegance and flexibility. 100% Beatrix cutton, wired absolutely to the x-axis for ease base</div>
                  <ul className="others">
                    <li>
                      <span className="tag">SKU</span>
                      <span className="value">22</span>
                    </li>
                    <li>
                      <span className="tag">Category</span>
                      <span className="value">Sport</span>
                    </li>
                    <li>
                      <span className="tag">Tags</span>
                      <span className="value">Equipments, Water</span>
                    </li>
                  </ul>
                  <button className="bttn primary">Add to cart</button>
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

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails)
