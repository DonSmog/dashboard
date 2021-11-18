import React from "react";

import { Route, Switch } from "react-router-dom";

import Dashboard from "../pages/Dashboard";
import Message from "../pages/Message";

const Redirect = () => {
  return (
    <Switch>
      <Route path="/" exact component={Dashboard} />
      <Route path="/message" component={Message} />
    </Switch>
  );
};

export default Redirect;
