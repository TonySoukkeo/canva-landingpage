import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";

// Component
import Login from "./login.component";
import ForgotPassword from "../forgot-password/forgot-password.component";

const LoginContainer = () => {
  const { path } = useRouteMatch();

  return (
    <Switch>
      <Route exact path={path} component={Login} />
      <Route exact path={`${path}/reset`} component={ForgotPassword} />
    </Switch>
  );
};

export default LoginContainer;
