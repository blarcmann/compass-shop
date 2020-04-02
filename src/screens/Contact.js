import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../assets/styles/screens/contact.scss';

export default function Contact() {
  return (
    <>
      <Header />
      <div className="contact">
        <div className="container-fluid">
          <h1 className="title">Contact us</h1>
          <div className="row">
            <div className="col-md-6">
              <div className="to-know">
                <h1>Never miss out on exiting chances</h1>
                <p>Its never about just the sellers, we keep you in mind incase there's</p>
                <ul className="connect">
                  <li>
                    <img src={require('../assets/images/location.svg')} alt="*" />
                    <span>22 cashman road, berger, Lagos</span>
                  </li>
                  <li>
                    <img src={require('../assets/images/calender.svg')} alt="*" />
                    <span>Monday to Friday: 9am to 8pm</span>
                  </li>
                  <li>
                    <img src={require('../assets/images/mail.svg')} alt="*" />
                    <span>info@compasshop.com</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-6">
              <div className="form">
                <input type="text" placeholder="Name" className="form-item" />
                <input type="email" placeholder="Email" className="form-item" />
                <textarea rows="5" placeholder="what's poppin'"></textarea>
                <button to="/shop" className="bttn primary">shop now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
