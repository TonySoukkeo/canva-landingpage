import React from "react";

// Styled components
import { Button } from "./button.styles";

export default ({ children, ...otherProps }) => {
  return <Button {...otherProps}>{children}</Button>;
};
