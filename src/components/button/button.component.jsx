import React from "react";

// Styled components
import { Button as Btn } from "./button.styles";

const Button = ({ children, ...otherProps }) => {
  return <Btn {...otherProps}>{children}</Btn>;
};

export default Button;
