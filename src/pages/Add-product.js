import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';
import Footer from '../components/Footer';
import toaster from "toasted-notes";
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
  }

  handleChange = (key, value) => {
    this.setState({ [key]: value })
  }

  addProduct = (e) => {
    console.log('con');
    toaster.notify('we here', { duration: 3000, position: 'bottom-right' });
    e.preventDefault();
    if (!this.state.name || !this.state.price || !this.state.description || !this.state.category) { return }
    this.setState({ loading: true });
    let payload = {
      email: this.state.email,
      password: this.state.password,
    }
    this.props.signin(this.props, payload);
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
                  <select name="category" className="form-item"
                    onChange={e => this.handleChange('category', e.target.value)}>
                    {sideColl.map((coll, i) => (
                      <option className="form-item" key={i} value={coll}>{coll}</option>
                    ))}
                  </select>
                  <textarea rows="5" placeholder="Product's description" className="form-item"></textarea>
                  <div className="submit">
                    <button to="/shop" className="bttn primary"
                      onClick={this.addProduct}>
                      sign up
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


const mapDispatchToProps = { createProduct }

export default connect(null, mapDispatchToProps)(AddProduct)
