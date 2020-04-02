import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './screens/Home';
import Shop from './screens/Shop';
import Contact from './screens/Contact';

function App() {
  return (
    <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/shop' exact component={Shop} />
      <Route path='/contact' exact component={Contact} />
      <Route path='**' component={Home} />
    </Switch>
  );
}

export default App;
