import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { Account } from "./account/account";
import { PublicRoute, PrivateRoute, LoginRoute } from "./components/routes";
import { Login } from "./login/login";
import { Dashboard } from "./dashboard/dashboard";
import { Signin } from "./signin/signin";
import "./app.css";
import { Projects } from "./projects/projects";

export default function App() {
  return (
    <Router>
      <Switch>
        <PrivateRoute component={Account} path="/account" />
        <PrivateRoute component={Dashboard} path="/dashboard" />
        <PrivateRoute component={Projects} path="/projects" />
        <PrivateRoute component={Projects} path="/tasks" />
        <PrivateRoute component={Projects} path="/members" />
        <PrivateRoute component={Projects} path="/settings" />
        <LoginRoute component={Login} path="/login" exact />
        <PublicRoute path="/signin" component={Signin} />
      </Switch>
    </Router>
  );
}
