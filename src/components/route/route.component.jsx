import React from "react";
import { Route as BrowserRoute } from "react-router-dom";

// Component
import Navigation from "../navigation/navigation.component";
import CenterWrap from "../center-wrap/center-wrap.component";

/**
 * Renders out component with or without navigation for route
 * @function Route
 * @param {JSX} Component - component that route will render
 * @param {String} path - string path on what route will match to
 * @param {Boolean} navigation - Boolean whether or not to show navigation or not
 * @param {any} otherProps - Any other props that might get passed into Route custom component
 */
const Route = ({ Component, path, navigation, ...otherProps }) => {
  return (
    <BrowserRoute
      path={path}
      component={() => (
        <React.Fragment>
          {navigation ? <Navigation /> : null}

          <CenterWrap data-test="component-center-wrap" marginTop="3rem">
            <Component />
          </CenterWrap>
        </React.Fragment>
      )}
      {...otherProps}
    />
  );
};

export default Route;
