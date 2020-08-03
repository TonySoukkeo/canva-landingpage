import React from "react";

// Styled components
import { Input as InputBox } from "./input.styles";

const Input = ({ placeholder = "enter text here", ...otherProps }) => {
  return <InputBox placeholder={placeholder} {...otherProps} />;
};

export default Input;
