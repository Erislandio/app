import React from "react";
import { Redirect, Route } from "react-router-dom";
import cookieJs from "js-cookie";
import { WithUserData } from "./withUserData";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const email = cookieJs.get("user");

  return (
    <Route
      {...rest}
      render={props =>
        email ? (
          <WithUserData
            component={Component}
            email={email && JSON.parse(email)}
            {...props}
          />
        ) : (
          <Redirect to="/login" exact />
        )
      }
    />
  );
};

const LoginRoute = ({ component: Component, path, ...rest }) => {
  const user = cookieJs.get("user");

  return (
    <Route
      {...rest}
      render={props =>
        user && path === "/login" ? (
          <Redirect to="/dashboard" exact {...props} />
        ) : (
          <Component to="/login" exact {...props} />
        )
      }
    />
  );
};

const PublicRoute = ({ component: Component, restricted, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        restricted ? (
          <Redirect to="/dashboard" exact />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

export { PublicRoute, PrivateRoute, LoginRoute };
