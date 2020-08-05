import React from "react";

// Styled Components
import { ButtonLink } from "../button.styles";

/**
 * Custom component that renders out a react-router 'Link' that wraps around it's children
 * @function ButtonLink
 * @param {any} children - wrapping JSX elements
 * @param {any} otherProps
 * @return {JSX}
 */
export default ({ children, ...otherProps }) => {
  return <ButtonLink {...otherProps}>{children}</ButtonLink>;
};
