import React from 'react'

import { Route, Router, Switch } from 'react-router-dom'

import Home from "../pages/Home";
import Catalog from "../pages/Catalog";
import Detail from '../pages/detail/Detail';
import SignUp from '../pages/SignUp';
import Register from '../components/resgister/Register';
import Favourite from '../components/Favourite/Favourite';

const Routes = () => {
  return (
    <Switch>
      <Route path="/search/:slug/:keyword" component={Catalog} />
      <Route path="/category/:category/:id" component={Detail} />
      <Route path="/category/:slug" component={Catalog} />
      <Route path="/" exact component={Home} />
      <Route path="/login" component={SignUp} />
      <Route path="/register" component={Register} />
      <Route path="/favourite" component={Favourite} />
    </Switch>
  );
}

export default Routes