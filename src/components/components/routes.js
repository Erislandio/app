import React from "react";
import { Redirect, Route } from "react-router-dom";
import cookie from "js-cookie";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const user = cookie.get("user");

  return (
    <Route
      {...rest}
      render={props =>
        user ? (
          <Component user={user} {...props} />
        ) : (
          <Redirect to="/login" exact />
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
        restricted ? <Redirect to="/dashboard" /> : <Component {...props} />
      }
    />
  );
};

export { PublicRoute, PrivateRoute };
