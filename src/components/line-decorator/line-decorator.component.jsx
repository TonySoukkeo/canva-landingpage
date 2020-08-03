import React from "react";

// Styled Components
import { Hr, LineContainer, LineSpan } from "./line-decorator.styles";

/**
 * Custom stylized component that renders any children between two lines
 * @function LineDecorator
 * @param {any} children
 * @returns {JSX}
 */
const LineDecorator = ({ children, ...otherProps }) => {
  return (
    <LineContainer>
      <Hr data-test="component-line-decorator" {...otherProps} />
      <LineSpan {...otherProps}>{children}</LineSpan>
      <Hr {...otherProps} />
    </LineContainer>
  );
};

export default LineDecorator;
