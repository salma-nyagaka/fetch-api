// react libraries
import * as React from 'react';
// third party packages
import { Redirect, Route, Switch } from 'react-router-dom';
import Details from '../components/Details'
import Characters from '../components/Characters'

// pages

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Characters} />
    <Route exact path="/people/:id" component={Details} />
    <Redirect to="/404" />
  </Switch>
);
export default Routes;