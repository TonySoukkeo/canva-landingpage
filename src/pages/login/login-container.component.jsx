import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";

// Component
import Login from "./login.component";
import ForgotPassword from "../forgot-password/forgot-password.component";

/**
 * Component that points to path "/login" and renders either login page or forgot password
 * @function LoginContainer
 * @returns {JSX}
 */
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
