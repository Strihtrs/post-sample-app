import React, { Component } from 'react';
import {Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import './App.css';

import Articles from './components/Articles';
import About from './components/About';

class App extends Component {

    constructor(props) {
      super(props);
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Articles} />
          <Route path="/about" component={About} />
        </Switch>
      </Router>
    );
  }
}

export default App;
