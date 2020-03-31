import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import '../assets/styles/screens/home.scss';
import Header from '../components/Header';
import Footer from '../components/Footer';

export class Home extends Component {
  render() {
    return (
      <>
        <Header />
        <div className="homepage">
          <div className="container-fluid">
            <div className="row">
              <div className="banner">
                <div className="entry-content">
                  <p>Exiting arrivals</p>
                  <h1>Get more essentials for less</h1>
                  <p> Go all out for deals up to 75% off</p>
                  <Link to="/shop" className="bttn primary">shop now</Link>
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

export default connect(mapStateToProps, mapDispatchToProps)(Home)
