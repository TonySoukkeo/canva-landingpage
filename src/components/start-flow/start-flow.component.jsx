import React from "react";
import PropTypes from "prop-types";

// Styled Components
import { CardWrapper } from "./start-flow.styles";

const StartFlow = ({ display }) => {
  return <CardWrapper></CardWrapper>;
};

StartFlow.propTypes = {
  display: PropTypes.string.isRequired,
};

export default StartFlow;
