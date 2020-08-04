import React from "react";

// Styled components
import { Button } from "./button.styles";

export default ({ children, disabled = false, ...otherProps }) => {
  return (
    <Button disabled={disabled} {...otherProps}>
      {children}
    </Button>
  );
};
