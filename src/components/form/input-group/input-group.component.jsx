import React from "react";

// Styled Components
import { InputGroup } from "./input-group.styles";

/**
 * Custom styled component that wraps around main input component that gives its surrounding extra styling
 * @function InputGroup
 * @param {any} children - Wrapped content that will receive its outer styling
 * @param {any} otherProps - any properties that can get passed down to InputGroup Component
 * @return {JSX}
 */
export default ({ children, ...otherProps }) => {
  return (
    <InputGroup data-test="component-input-group" {...otherProps}>
      {children}
    </InputGroup>
  );
};
