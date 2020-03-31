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
          <div className="container">
            <div className="main-menu">
              <div className="row">
                <div className="col-md-3 col-xs-6">
                  <Link to="/shop" className="menu-cover">
                    <div className="menu"></div>
                    <div className="content">
                      <h2 className="title">Tracksuits</h2>
                      <span className="subtitle">shop now</span>
                    </div>
                  </Link>
                </div>
                <div className="col-md-3 col-xs-6">
                  <Link to="/shop" className="menu-cover">
                    <div className="menu"></div>
                    <div className="content">
                      <h2 className="title">Tracksuits</h2>
                      <span className="subtitle">shop now</span>
                    </div>
                  </Link>
                </div>
                <div className="col-md-3 col-xs-6">
                  <Link to="/shop" className="menu-cover">
                    <div className="menu"></div>
                    <div className="content">
                      <h2 className="title">Tracksuits</h2>
                      <span className="subtitle">shop now</span>
                    </div>
                  </Link>
                </div>
                <div className="col-md-3 col-xs-6">
                  <Link to="/shop" className="menu-cover">
                    <div className="menu"></div>
                    <div className="content">
                      <h2 className="title">Tracksuits</h2>
                      <span className="subtitle">shop now</span>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="ads">
                <div className="ads-banner">
                  <h2 className="tag">10% on all Oasis</h2>
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
