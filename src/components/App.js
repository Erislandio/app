import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { Account } from "./account/account";
import { PublicRoute, PrivateRoute } from "./components/routes";
import { Login } from "./login/login";

export default function App() {
  return (
    <Router>
      <Switch>
        <PrivateRoute component={Account} path="/account" />
        <PublicRoute component={Login} path="/login" />
      </Switch>
    </Router>
  );
}
