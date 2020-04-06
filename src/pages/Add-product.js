import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../assets/styles/pages/signin.scss';
import { createProduct } from '../actions/products';
import { sideColl } from '../constants/mock';
import PageBreadcrumb from '../components/Page-breadcrumb';

export class AddProduct extends Component {
  state = {
    loading: false,
    name: '',
    price: '',
    category: 'All',
    description: '',
    fs: '',
  }

  handleChange = (key, value) => {
    this.setState({ [key]: value })
  }

  onFileChange = (e) => {
    e.preventDefault();
    if (e.target.files.length > 0) {
      this.setState({
        fs: e.target.files[0]
      })
    }
  }


  addProduct = (e) => {
    e.preventDefault();
    if (!this.state.name || !this.state.price || !this.state.description || !this.state.category) {
      alert('All fields are compulsory')
    }
    const payload = new FormData();
    payload.append('name', this.state.name);
    payload.append('price', this.state.price);
    payload.append('category', this.state.category);
    payload.append('description', this.state.description);
    payload.append('product_image', this.state.fs, this.state.fs.name);
    this.props.createProduct(this.props, payload);
    this.setState({ loading: false });
  }

  render() {
    const paths = ['add-product'];
    return (
      <>
        <Header />
        <div className="container-fluid">
          <div className="row">
            <PageBreadcrumb paths={paths} title="Add product" />
          </div>
          <div className="row">
            <div className="col-lg-4 mx-auto">
              <section className="create-product">
                <form onSubmit={this.addProduct}>
                  <input type="text" placeholder="Product's name" value={this.state.name} className="form-item"
                    onChange={e => this.handleChange('name', e.target.value)}
                  />
                  <input type="number" placeholder="Product's price" value={this.state.price} className="form-item"
                    onChange={e => this.handleChange('price', e.target.value)}
                  />
                  <div className="upload-file">
                    <label htmlFor="feature_img">
                      <img src={require('../assets/images/upload.svg')} alt="*" />
                    </label>
                    <input type="file" accept="image/*" name="feature_img" id="feature_img"
                      onChange={(e) => this.onFileChange(e)} />
                    <div className={!this.state.fs ? "placeholder" : "hide"}>product's image</div>
                    <div className={this.state.fs ? "placeholder slide-in" : "hide"}>{this.state.fs.name}</div>
                  </div>
                  <select name="category" className="form-item"
                    onChange={e => this.handleChange('category', e.target.value)}>
                    {sideColl.map((coll, i) => (
                      <option className="form-item" key={i} value={coll}>{coll}</option>
                    ))}
                  </select>
                  <textarea rows="5" placeholder="Product's description" value={this.state.description} className="form-item"
                    onChange={e => this.handleChange('description', e.target.value)}
                  ></textarea>
                  <div className="submit">
                    <button className="bttn primary"
                      onClick={this.addProduct}>
                      add product
                      <span className={this.props.initialized ? "loader" : 'hide'}></span>
                    </button>
                  </div>
                </form>
              </section>
            </div>
          </div>
        </div>
        <Footer />
      </>
    )
  }
}

const mapStateToProps = state => ({
  initialized: state.product.initialized,
})

const mapDispatchToProps = { createProduct }

export default connect(mapStateToProps, mapDispatchToProps)(AddProduct)
