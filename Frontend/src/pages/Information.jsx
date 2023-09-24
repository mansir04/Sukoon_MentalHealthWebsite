import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Articles from './Articles';
import './Anxiety.css';
c // Import other mental illness pages

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/" component={Articles} />
      <Route path="/anxiety" component={Anxiety} />
      {/* Add routes for other mental illness pages */}
    </Switch>
  </Router>,
  document.getElementById('root')
);