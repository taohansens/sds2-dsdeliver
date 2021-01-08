import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Orders from "./Orders";
import Navbar from './Navbar';

function Routes() {
  return (
    <BrowserRouter>
        <Navbar />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/orders">
          <Orders />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
