import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Contact from './pages/Contact';
import Cart from './pages/Cart';
import ProductDetails from './pages/Product-details';
import Signin from './pages/Signin';

function App() {
  return (
    <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/shop' component={Shop} />
      <Route path='/contact' component={Contact} />
      <Route path='/product/:id' component={ProductDetails} />
      <Route path="/cart" component={Cart} />
      <Route path="/sign-in" component={Signin} />
      <Route path='**' component={Home} />
    </Switch>
  );
}

export default App;
