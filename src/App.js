import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';

export default class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path='/' render={ () => <HomePage className="Desktop" />} />
        </Switch>
      </div>
    )
  }
}

