import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Cardapio from './Cardapio';
// import Home from './Home';
import NotFound from './NotFound';

class Routes extends Component {
  render() {
    return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route exact path="/" component={Cardapio} />
          <Route exact path="/cardapio" component={Cardapio} />
          <Route exact path="*" component={NotFound} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Routes;
