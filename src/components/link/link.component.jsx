import React from "react";

// Styled Components
import { Link } from "./link.styles";

/**
 * Custom styled components for styling its wrapping contents as links
 * @function Link
 * @param {any} children - Content to be transformed as a link
 * @param {any} otherProps - any properties that can get passed down to Link component
 * @return {JSX}
 */
export default ({ children, ...otherProps }) => {
  return (
    <Link data-test="component-link" {...otherProps}>
      {children}
    </Link>
  );
};
