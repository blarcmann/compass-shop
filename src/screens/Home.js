import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import '../assets/styles/screens/home.scss';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Collections from '../components/Collections';
import { menuItems, arrivals, categories, collections } from '../constants/mock';

export class Home extends Component {

  renderMenu(item, index) {
    return (
      <div className="col-md-3 col-sm-6" key={index}>
        <Link to="/shop" className="menu-cover">
          <div className="menu" style={{ backgroundImage: `url(${item.bg})` }}></div>
          <div className="content">
            <h2 className="title">{item.title}</h2>
            <span className="subtitle">shop now</span>
          </div>
        </Link>
      </div>
    )
  }

  renderArrivals(arrv, i) {
    return (
      <div className="col-lg-6" key={i}>
        <div className="arrival" style={{ backgroundImage: `url(${arrv.bg})` }}>
          <div className="arrival-item">
            <h2>{arrv.title}</h2>
            <p>{arrv.subtitle}</p>
          </div>
        </div>
      </div>
    )
  }

  renderCollections(cat, i, coll) {
    return (
      <div className="collection" key={i}>
        <div className="tile">{cat}</div>
        <Collections coll={coll} />
      </div>

    )
  }

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
                {menuItems.map((item, index) => (
                  this.renderMenu(item, index)
                ))}
              </div>
            </div>
            <div className="arrivals">
              <div className="row">
                {arrivals.map((item, index) => (
                  this.renderArrivals(item, index)
                ))}
              </div>
            </div>
            <div className="row">
              <div className="ads">
                <div className="ads-banner">
                  <h2 className="tag">10% on all Oasis</h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="categories">
                <div className="title">2020 Collections</div>
                <div className="collections">
                  {categories.map((category, index) => (
                    this.renderCollections(category, index, collections)
                  ))}
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
