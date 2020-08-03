import React from "react";
import PropTypes from "prop-types";

// Components
import GettingStarted from "../getting-started/getting-started.component";
import Login from "../login/login.component";
import Signup from "../signup/signup.component";

// Styled Components
import { CardWrapper } from "./start-flow.styles";

/**
 * Component that determines what component to display based on display parameter
 * @function StartFlow
 * @param {string} display - string to determine what component to display
 * @returns {JSX}
 */
const StartFlow = ({ display }) => {
  let view;

  if (display === "default") {
    view = <GettingStarted />;
  } else if (display === "login") {
    view = <Login />;
  } else if (display === "signup") {
    view = <Signup />;
  }

  return <CardWrapper data-test="component-start-flow">{view}</CardWrapper>;
};

StartFlow.propTypes = {
  display: PropTypes.string.isRequired,
};

export default StartFlow;
