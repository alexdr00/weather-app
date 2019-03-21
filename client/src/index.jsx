// Dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

// Components
import App from './components/App';
import Home from './components/Home';


ReactDOM.render(
  <BrowserRouter>
    <App>
      <Route exact path="/" component={Home} />
    </App>
  </BrowserRouter>,
  document.getElementById('root')
);