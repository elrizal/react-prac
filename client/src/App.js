import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';
import TemplateTheme from './components/TemplateTheme.jsx'
import Clock from './components/Clock';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component.jsx';

function App() {
  return (
    <div className="App">
      <TemplateTheme>
      {/* <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
      </Switch> */}
      <div className="container">
      <Clock/>
      </div>
      </TemplateTheme>
    </div>
  );
}

export default App;
