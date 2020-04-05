import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../assets/styles/pages/signin.scss';
import { signin } from '../actions/auth';

export class Signin extends Component {
  state = {
    loading: false,
    email: '',
    username: '',
    password: '',
    activeTab: 'signup'
  }

  handleChange = (key, value) => {
    this.setState({ [key]: value })
    console.log(this.state);
  }

  setActiveTab = (tab) => {
    return this.setState({ activeTab: tab })
  }

  submitForm = (e) => {
    e.preventDefault();
    if (!this.state.email || !this.state.password || !this.state.username) { return }
    this.setState({ loading: true });
    let payload = {
      email: this.state.email,
      password: this.state.password,

    }
    this.props.signin(this.props, payload);
    this.setState({ loading: false });
  }


  render() {
    return (
      <>
        <Header />
        <div className="signin">
          <div className="container-fluid">
            <div className="tabbed">
              <div className={this.state.activeTab === 'signup' ? "tab active" : 'tab'}
                onClick={() => this.setActiveTab('signup')}>Sign up</div>
              <div className={this.state.activeTab === 'login' ? "tab active" : 'tab'}
                onClick={() => this.setActiveTab('login')}>Login</div>
            </div>
            <div className="row">
              <div className="col-lg-4 mx-auto">
                <section className={this.state.activeTab === 'signup' ? "sign-up-in slide-in" : 'hide'}>
                  <h3 className="title">I do not have an account</h3>
                  <p className="subtitle">Enter your details below</p>
                  <form onSubmit={this.submitForm}>
                    <input type="email" placeholder="Email" value={this.state.email} className="form-item"
                      onChange={e => this.handleChange('email', e.target.value)}
                    />
                    <input type="text" placeholder="Username" value={this.state.username} className="form-item"
                      onChange={e => this.handleChange('username', e.target.value)}
                    />
                    <input type="password" placeholder="Password" value={this.state.password} className="form-item"
                      onChange={e => this.handleChange('password', e.target.value)}
                    />
                    <div className="submit">
                      <button to="/shop" className="bttn primary">sign up</button>
                    </div>
                  </form>
                </section>
                <section className={this.state.activeTab === 'login' ? "sign-up-in slide-in" : 'hide'}>
                  <h3 className="title">I do have an account</h3>
                  <p className="subtitle">Enter your credentials below</p>
                  <form onSubmit={this.submitForm}>
                    <input type="email" placeholder="Email" value={this.state.email} className="form-item"
                      onChange={e => this.handleChange('email', e.target.value)}
                    />
                    <input type="password" placeholder="Password" value={this.state.password} className="form-item"
                      onChange={e => this.handleChange('password', e.target.value)}
                    />
                    <div className="submit">
                      <button to="/shop" className="bttn primary">login</button>
                    </div>
                  </form>
                </section>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </>
    )
  }
}

const mapDispatchToProps = { signin }

export default connect(null, mapDispatchToProps)(Signin)