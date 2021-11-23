import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "./assets/css/index.css";

import Dashboard from "./pages/Dashboard";
import Message from "./pages/Message";
import AppProvider from "./provider/AppProvider.context";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <AppProvider>
          <Route path="/" exact component={Dashboard} />
          <Route path="/message" exact component={Message} />
        </AppProvider>
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
