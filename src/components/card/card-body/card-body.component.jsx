import React from "react";

// Styled Components
import { Body } from "./card-body.styles";

/**
 * Custom Component that ties directly with main Card component
 * @function CardBody
 * @param {JSX} children
 * @param {any} otherProps - Any other props to be passed in when using Card Component
 * @returns {JSX}
 */
const CardBody = ({ children, ...otherProps }) => {
  return (
    <Body data-test="component-card-body" {...otherProps}>
      {children}
    </Body>
  );
};

export default CardBody;
