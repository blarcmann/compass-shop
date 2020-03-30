import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';
import Footer from '../components/Footer';

export class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <h1>Welcome hommmmmmeeeeeee!!!</h1>
        <Footer />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
