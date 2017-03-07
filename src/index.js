import React from 'react';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import Try from './Try';



ReactDOM.render((
    <Router history={hashHistory}>
    <Route path="/" component={App}></Route>
      <Route path="/try" component={Try}></Route>
    </Router>
    ),document.getElementById('root')
);
