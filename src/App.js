import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './screens/Home';
import Shop from './screens/Shop';

function App() {
  return (
    <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/shop' exact component={Shop} />
      <Route path='**' component={Home} />
    </Switch>
  );
}

export default App;
