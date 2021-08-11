import React, { useContext, useEffect, useState } from "react";
import { Route, Redirect } from "react-router-dom";
import { AccountContext } from "./account";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { logged } = useContext(AccountContext);
  useEffect(() => {
    console.log({ logged });
  }, [logged]);
  return (
    <Route
      {...rest}
      render={(props) =>
        logged ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  );
};

export default PrivateRoute;
