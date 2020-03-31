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
                <div className="col-md-3 col-sm-6">
                  <Link to="/shop" className="menu-cover">
                    <div className="menu"></div>
                    <div className="content">
                      <h2 className="title">Tracksuits</h2>
                      <span className="subtitle">shop now</span>
                    </div>
                  </Link>
                </div>
                <div className="col-md-3 col-sm-6">
                  <Link to="/shop" className="menu-cover">
                    <div className="menu"></div>
                    <div className="content">
                      <h2 className="title">Tracksuits</h2>
                      <span className="subtitle">shop now</span>
                    </div>
                  </Link>
                </div>
                <div className="col-md-3 col-sm-6">
                  <Link to="/shop" className="menu-cover">
                    <div className="menu"></div>
                    <div className="content">
                      <h2 className="title">Tracksuits</h2>
                      <span className="subtitle">shop now</span>
                    </div>
                  </Link>
                </div>
                <div className="col-md-3 col-sm-6">
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
            <div className="arrivals">
              <div className="row">
                <div className="col-lg-6">
                  <div className="arrival">
                    <div className="arrival-item">
                      <h2>New Arrivals</h2>
                      <p>shop best swimming equipment</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="arrival">
                    <div className="arrival-item">
                      <h2>Summer sales</h2>
                      <p>experience the power of nike</p>
                    </div>
                  </div>
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
            <div className="row">
              <div className="categories">
                <div className="title">2020 Collections</div>
                <div className="collections">
                  <div className="collection">
                    <div className="tile">Featured</div>
                    <ul>
                      <li>
                        <Link to="/shop">exercise</Link>
                      </li>
                      <li>
                        <Link to="shop">running</Link>
                      </li>
                      <li>
                        <Link to="/shop">sneakers</Link>
                      </li>
                      <li>
                        <Link to="/shop">sneakers</Link>
                      </li>
                      <li>
                        <Link to="/shop">sport</Link>
                      </li>
                      <li>
                        <Link to="/shop">swim-equipment</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="collection">
                    <div className="tile">Top</div>
                    <ul>
                      <li>
                        <Link to="/shop">exercise</Link>
                      </li>
                      <li>
                        <Link to="shop">running</Link>
                      </li>
                      <li>
                        <Link to="/shop">sneakers</Link>
                      </li>
                      <li>
                        <Link to="/shop">sneakers</Link>
                      </li>
                      <li>
                        <Link to="/shop">sport</Link>
                      </li>
                      <li>
                        <Link to="/shop">swim-equipment</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="collection">
                    <div className="tile">Women</div>
                    <ul>
                      <li>
                        <Link to="/shop">exercise</Link>
                      </li>
                      <li>
                        <Link to="shop">running</Link>
                      </li>
                      <li>
                        <Link to="/shop">sneakers</Link>
                      </li>
                      <li>
                        <Link to="/shop">sneakers</Link>
                      </li>
                      <li>
                        <Link to="/shop">sport</Link>
                      </li>
                      <li>
                        <Link to="/shop">swim-equipment</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="collection">
                    <div className="tile">Children</div>
                    <ul>
                      <li>
                        <Link to="/shop">exercise</Link>
                      </li>
                      <li>
                        <Link to="shop">running</Link>
                      </li>
                      <li>
                        <Link to="/shop">sneakers</Link>
                      </li>
                      <li>
                        <Link to="/shop">sneakers</Link>
                      </li>
                      <li>
                        <Link to="/shop">sport</Link>
                      </li>
                      <li>
                        <Link to="/shop">swim-equipment</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="collection">
                    <div className="tile">Men</div>
                    <ul>
                      <li>
                        <Link to="/shop">exercise</Link>
                      </li>
                      <li>
                        <Link to="shop">running</Link>
                      </li>
                      <li>
                        <Link to="/shop">sneakers</Link>
                      </li>
                      <li>
                        <Link to="/shop">sneakers</Link>
                      </li>
                      <li>
                        <Link to="/shop">sport</Link>
                      </li>
                      <li>
                        <Link to="/shop">swim-equipment</Link>
                      </li>
                    </ul>
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

export default connect(mapStateToProps, mapDispatchToProps)(Home)
